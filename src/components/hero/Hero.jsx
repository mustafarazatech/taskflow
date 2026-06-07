import React from "react";

const Hero = () => {
  return (
    <section
      className="py-5"
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6">
            <span
              className="badge px-3 py-2 mb-3"
              style={{
                backgroundColor: "#f3f4f6",
                color: "#111827",
                fontSize: "0.9rem",
              }}
            >
              🚀 Productivity Made Simple
            </span>

            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "3.5rem",
                lineHeight: "1.1",
                color: "#111827",
              }}
            >
              Stay Organized.
              <br />
              Get More Done.
            </h1>

            <p
              className="mb-4"
              style={{
                fontSize: "1.15rem",
                color: "#6b7280",
                maxWidth: "550px",
              }}
            >
              TaskNest helps you manage daily tasks, track progress,
              and stay focused on what matters most. A clean and simple
              way to boost your productivity.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <button
                className="btn btn-lg px-4"
                style={{
                  backgroundColor: "#111827",
                  color: "#fff",
                  borderRadius: "12px",
                }}
              >
                Get Started
              </button>

              <button
                className="btn btn-lg px-4"
                style={{
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="col-lg-6 text-center">
            <div
              className="p-4"
              style={{
                background: "#f9fafb",
                borderRadius: "24px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
                alt="TaskNest Illustration"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;