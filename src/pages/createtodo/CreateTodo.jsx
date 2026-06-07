import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useTodo from "../../store/todocontext/TodoContext";
import Hero from "../../components/hero/Hero";

const CreateTodo = () => {
  const { todoObj, handleTodoChange, handleAddTodo } = useTodo();

  return (
    <>
      <Navbar />
      <Hero/>

      <div
        className="container py-5"
        style={{ minHeight: "80vh" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9">
            <div
              className="p-4 p-md-5"
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                border: "1px solid #f1f5f9",
              }}
            >
              {/* Heading */}
              <div className="text-center mb-5">
                <h1
                  className="fw-bold mb-3"
                  style={{ color: "#111827" }}
                >
                  Create a New Task
                </h1>

                <p
                  className="mb-0"
                  style={{
                    color: "#6b7280",
                    fontSize: "1.05rem",
                  }}
                >
                  Stay organized and keep track of everything that matters.
                </p>
              </div>

              {/* Form */}
              <form>
                {/* Title */}
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="form-label fw-semibold"
                  >
                    Task Title
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="title"
                    name="title"
                    value={todoObj.title}
                    onChange={handleTodoChange}
                    placeholder="Enter task title..."
                    style={{
                      borderRadius: "12px",
                    }}
                  />
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="form-label fw-semibold"
                  >
                    Description
                  </label>

                  <textarea
                    className="form-control"
                    id="description"
                    rows="4"
                    name="description"
                    value={todoObj.description}
                    onChange={handleTodoChange}
                    placeholder="Write a short description..."
                    style={{
                      borderRadius: "12px",
                      resize: "none",
                    }}
                  />
                </div>

                {/* Button */}
                <div className="d-grid">
                  <button
                    type="button"
                    onClick={handleAddTodo}
                    className="btn btn-lg"
                    style={{
                      background: "#111827",
                      color: "#fff",
                      borderRadius: "12px",
                      fontWeight: "600",
                      padding: "12px",
                    }}
                  >
                    + Add Task
                  </button>
                </div>
              </form>
            </div>

            {/* Small Info Card */}
            <div
              className="text-center mt-4 p-3"
              style={{
                background: "#f9fafb",
                borderRadius: "16px",
              }}
            >
              <small style={{ color: "#6b7280" }}>
                Create tasks, stay focused, and boost your productivity with
                TaskNest.
              </small>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CreateTodo;