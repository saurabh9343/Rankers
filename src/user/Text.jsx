import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./user.css";

const mcqData = [
  {
    id: 1,
    question: "Which bone is present in the upper arm?",
    options: ["Radius", "Ulna", "Humerus", "Clavicle"],
    answer: "Humerus",
  },
  {
    id: 2,
    question: "Which nerve supplies the deltoid muscle?",
    options: ["Radial nerve", "Ulnar nerve", "Axillary nerve", "Median nerve"],
    answer: "Axillary nerve",
  },
  // {
  //   id: 3,
  //   question: "Which artery is the main supply of the arm?",
  //   options: [
  //     "Radial artery",
  //     "Brachial artery",
  //     "Ulnar artery",
  //     "Femoral artery",
  //   ],
  //   answer: "Brachial artery",
  // },
  // {
  //   id: 4,
  //   question: "Which muscle is known as the 'boxer’s muscle'?",
  //   options: ["Biceps", "Deltoid", "Serratus anterior", "Pectoralis major"],
  //   answer: "Serratus anterior",
  // },
  // {
  //   id: 5,
  //   question: "Which joint is present in the shoulder?",
  //   options: [
  //     "Ball and socket joint",
  //     "Hinge joint",
  //     "Gliding joint",
  //     "Pivot joint",
  //   ],
  //   answer: "Ball and socket joint",
  // },
  // {
  //   id: 6,
  //   question: "Which bone articulates with the scapula?",
  //   options: ["Humerus", "Tibia", "Fibula", "Femur"],
  //   answer: "Humerus",
  // },
  // {
  //   id: 7,
  //   question: "Which muscle flexes the forearm?",
  //   options: ["Triceps", "Biceps", "Deltoid", "Latissimus dorsi"],
  //   answer: "Biceps",
  // },
  // {
  //   id: 8,
  //   question: "Which nerve is commonly injured in wrist drop?",
  //   options: ["Median nerve", "Radial nerve", "Ulnar nerve", "Sciatic nerve"],
  //   answer: "Radial nerve",
  // },
  // {
  //   id: 9,
  //   question: "Which muscle is responsible for elbow extension?",
  //   options: ["Biceps", "Triceps", "Brachialis", "Pectoralis minor"],
  //   answer: "Triceps",
  // },
  // {
  //   id: 10,
  //   question: "Which bone is the longest in the upper limb?",
  //   options: ["Humerus", "Radius", "Ulna", "Scapula"],
  //   answer: "Humerus",
  // },
];

const Text = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [select, setSelected] = useState("");
  const [answers, setAnswers] = useState([]); // store all answers
  const [showResult, setShowResult] = useState(false);

  const current = mcqData[index];

  const nextQuestion = () => {
    setAnswers([...answers, select]); // store answer in array

    if (index < mcqData.length - 1) {
      setIndex(index + 1);
      setSelected("");
    }
  };

  const submitTest = () => {
    const finalAnswers = [...answers, select];

    let correct = 0;
    finalAnswers.forEach((ans, i) => {
      if (ans === mcqData[i].answer) correct++;
    });

    const wrong = mcqData.length - correct;

    setShowResult({ correct, wrong });
  };

  return (
    <div className="container-fluid dashboard-container">
      <button
        onClick={() => navigate(-1)}
        className="backbtn m-3"
        style={{ borderRadius: "8px" }}
      >
        ← Back
      </button>

      <div className="container mt-5">
        {/* If result is submitted */}
        {showResult ? (
          <div className="p-4 mt-4">
            <h2>Result Summary</h2>
            <p style={{ fontSize: "20px" }}>
              ✅ Correct: <strong>{showResult.correct}</strong>
            </p>
            <p style={{ fontSize: "20px" }}>
              ❌ Wrong: <strong>{showResult.wrong}</strong>
            </p>
          </div>
        ) : (
          <>
            <div className="p-3">
              <h3>MCQ Test</h3>
              <p>
                Question {index + 1} / {mcqData.length}
              </p>
              <h3>
                {index + 1}. {current.question}
              </h3>

              {current.options.map((option, i) => (
                <div className="radio-input mt-2" key={i}>
                  <label className="label radio-option">
                    <input
                      type="radio"
                      name="value-radio"
                      value={option}
                      onChange={(e) => setSelected(e.target.value)}
                    />
                    <p className="text">{option}</p>
                  </label>
                </div>
              ))}
            </div>

            {/* Next / Submit button */}
            {index === mcqData.length - 1 ? (
              <button
                className="backbtn btn-success mt-3"
                onClick={submitTest}
                disabled={!select}
              >
                Submit Test
              </button>
            ) : (
              <button
                className="backbtn btn-primary mt-3"
                onClick={nextQuestion}
                disabled={!select}
              >
                Next
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Text;
