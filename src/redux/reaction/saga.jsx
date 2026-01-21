import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "./action";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { auth, db } from "../../Firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

//  SIGNUP SAGA
function* userSignupSaga(action) {
  try {
    console.log("✅ SIGNUP PAYLOAD:", action.payload);
    const { email, password, name, navigate } = action.payload;

    const userCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password,
    );

    const uid = userCredential.user.uid;

    // 🔥 Save user with status
    yield call(addDoc, collection(db, "users"), {
      uid,
      name,
      email,
      status: "active",
      createdAt: new Date(),
    });

    // ✅ success action (ONLY ONCE)
    yield put({
      type: "USER_SIGNUP_DONE",
      payload: { uid, name, email, status: "active" },
    });
    alert("Your Have success Fully Signup...........");

    // logout after signup
    yield call(signOut, auth);

    navigate("/login");
  } catch (err) {
    yield put({
      type: types.USER_ERROR,
      payload: err.message,
    });
  }
}

//Login saga
function* userLoginSaga(action) {
  try {
    const { email, password, navigate } = action.payload;

    const userLoginData = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password,
    );

    const token = userLoginData.user.accessToken;
    const userid = userLoginData.user.uid;

    // const userRef = doc(db, "users", userid);
    // const userSnap = yield call(getDocs, userRef);

    const loginUser = query(
      collection(db, "users"),
      where("uid", "==", userid),
    );
    const userSnap = yield call(getDocs, loginUser);

    if (userSnap.empty) {
      alert("User record not found in database");
    }

    const userDataFromDB = userSnap.docs[0].data();

    //  BLOCK CHECK
    if (userDataFromDB.status === "blocked") {
      yield call(signOut, auth);

      yield put({
        type: types.USER_ERROR,
        payload: "Your account has been blocked by admin",
      });
      alert("Your User ID is Blocked");
      return;
    }

    const userData = {
      uid: userid,
      email: userLoginData.user.email,
      name: userLoginData.user.email.split("@")[0],
      status: userLoginData.status,
    };

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));

    // ✅ success action (ONLY ONCE)
    yield put({
      type: "USER_LOGIN_DONE",
      payload: { ...userData, token },
    });

    navigate("/dashboard");
  } catch (err) {
    yield put({
      type: types.USER_ERROR,
      payload: err.message,
    });
  }
}

//user Load  saga
function* loadUserSaga() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return;

    // 🔥 Fetch latest user data from Firestore
    const q = query(collection(db, "users"), where("uid", "==", user.uid));

    const snap = yield call(getDocs, q);

    if (snap.empty) {
      yield call(signOut, auth);
      localStorage.clear();
      return;
    }

    const userDataFromDB = snap.docs[0].data();

    // 🚫 BLOCK CHECK
    if (userDataFromDB.status === "blocked") {
      // Show message first
      alert(
        "Admin has blocked your account. You will be logged out in 3 seconds.",
      );

      // Wait 3 seconds
      yield new Promise((resolve) => setTimeout(resolve, 3000));

      // Logout after 3 seconds
      yield call(signOut, auth);
      localStorage.clear();

      yield put({
        type: types.USER_ERROR,
        payload: "Admin has blocked your account",
      });

      yield put({ type: "USER_LOGOUT_DONE" });

      alert("Admin has blocked your account");
      return;
    }

    // ✅ User is active → load user
    yield put({
      type: "USER_LOAD_DONE",
      payload: {
        ...user,
        status: userDataFromDB.status,
      },
    });
  } catch (err) {
    yield put({
      type: types.USER_ERROR,
      payload: err.message,
    });
  }
}

//change pass saga
function* changePassword(action) {
  try {
    const { currentPassword, newPassword, navigate } = action.payload;

    const user = auth.currentUser;

    if (!user || !user.email) {
      throw new Error("User not logged in");
    }

    // 🔐 Create credential with OLD password
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword,
    );

    // 🔁 Re-authenticate
    yield call(reauthenticateWithCredential, user, credential);

    // 🔑 Update password
    yield call(updatePassword, user, newPassword);

    alert("Password changed successfully ✅\nPlease login again");

    // 🔴 FORCE LOGOUT AFTER PASSWORD CHANGE
    yield call(signOut, auth);

    // 🧹 Clear local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // 🔄 Clear redux auth state
    yield put({ type: "USER_LOGOUT_DONE" });

    // 🔄 Redirect to login
    navigate("/login");
  } catch (err) {
    console.log("Change Password Error:", err);
    let message = "Something went wrong";

    if (err.code === "auth/wrong-password") {
      alert((message = "Current password is incorrect ❌"));
    } else if (err.code === "auth/too-many-requests") {
      alert((message = "Too many attempts. Try later ⏳"));
    } else if (err.code === "auth/requires-recent-login") {
      alert((message = "Session expired. Please login again"));
    } else {
      message = err.message;
    }

    yield put({ type: types.USER_ERROR, payload: message });
  }
}

//user  logout saga
function* userLogoutSaga(action) {
  try {
    const { navigate } = action.payload;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    yield call(signOut, auth);

    yield put({ type: "USER_LOGOUT_DONE" });
    navigate("/login");
  } catch (err) {
    yield put({ type: types.USER_ERROR, payload: err.message });
  }
}

//  watcher saga
export default function* saga() {
  yield takeLatest(types.USER_LOGIN, userLoginSaga);
  yield takeLatest(types.USER_SIGNUP, userSignupSaga);
  yield takeLatest(types.USER_LOAD, loadUserSaga);
  yield takeLatest(types.CHANGE_PASSWORD, changePassword);
  yield takeLatest(types.USER_LOGOUT, userLogoutSaga);
}
