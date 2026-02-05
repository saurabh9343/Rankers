import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_BLOGS_FETCH } from "../redux/reaction/action";
import "./user.css";

function Blogs() {
  const dispatch = useDispatch();
  const [activeId, setActiveId] = useState(null);

  const {
    blogs = [],
    loading = false,
  } = useSelector((state) => state.allReducer || {});

  useEffect(() => { 
    dispatch({ type: USER_BLOGS_FETCH });
  }, [dispatch]);

  if (loading) return <div className="text-center py-5 mt-5"><div className="spinner-border text-success"></div></div>;

  return (
    <div className="blog-container">
      <div className="container">
      
        <div className="row mb-5 text-center text-md-start">
          <div className="col-12">
            <h6 className="text-success fw-bold text-uppercase">Updates</h6>
            <h2 className="display-5 fw-bold">Latest Articles</h2>
            <div className="bg-success mx-auto mx-md-0" style={{height: '4px', width: '60px'}}></div>
          </div>
        </div>

        <div className="row blog-grid-custom g-4">
          {blogs.map((blog) => {
            const isOpen = activeId === blog.id;

            return (
              <div className="col-12 col-md-6 col-lg-6" key={blog.id}>
                <div className={`card blog-card shadow-sm ${isOpen ? "blog-open" : ""}`}>
                  <div className="blog-accent-bar" />
                  
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <span className="badge category-badge">
                        {blog.type || "Update"}
                      </span>
                    </div>

                    <h4 className="blog-title fw-bold mb-3">{blog.title}</h4>

                    <p className="blog-desc text-muted mb-3">
                      {blog.description}
                    </p>

                    {isOpen && (
                      <div className="expanded-content">
                        <h6 className="fw-bold text-dark mb-2 border-bottom pb-1">Detail View</h6>
                        <p className="small text-secondary mb-3">
                          {blog.fullDescription || "Detailed context for this specific update follows below."}
                        </p>
                        
                        {(blog.point1 || blog.point2 || blog.point3) && (
                          <div className="mt-3">
                            {blog.point1 && <div className="small mb-2">🎯 {blog.point1}</div>}
                            {blog.point2 && <div className="small mb-2">🎯 {blog.point2}</div>}
                            {blog.point3 && <div className="small mb-2">🎯 {blog.point3}</div>}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="mt-4">
                      <button
                        className="btn view-btn w-100"
                        onClick={() => setActiveId(isOpen ? null : blog.id)}
                      >
                        {isOpen ? "Show Less" : "Read Full Story"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default Blogs;