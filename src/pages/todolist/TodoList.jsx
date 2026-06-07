import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useTodo from "../../store/todocontext/TodoContext";
import TodoCard from "../../components/todocard/TodoCard";

const TodoList = () => {
  const { todoList } = useTodo();

  return (
    <>
      <Navbar />

      <div
        className="container py-5"
        style={{ minHeight: "80vh" }}
      >
        {/* Header */}
        <div className="text-center mb-5">
          <h1
            className="fw-bold"
            style={{
              color: "#111827",
            }}
          >
            My Tasks
          </h1>

          <p
            className="mt-2"
            style={{
              color: "#6b7280",
              fontSize: "1.05rem",
            }}
          >
            Stay organized and keep track of your daily goals.
          </p>
        </div>

        {/* Stats Card */}
        <div
          className="mb-5 p-4 text-center"
          style={{
            background: "#f9fafb",
            borderRadius: "20px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3
            className="mb-1 fw-bold"
            style={{ color: "#111827" }}
          >
            {todoList.length}
          </h3>

          <p
            className="mb-0"
            style={{ color: "#6b7280" }}
          >
            Total Tasks
          </p>
        </div>

        {/* Todo List */}
        {todoList.length > 0 ? (
          <div className="d-flex flex-wrap gap-4 justify-content-center">
            {todoList.map((todo) => (
              <TodoCard
                todo={todo}
                key={todo.id}
              />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-5"
            style={{
              background: "#f9fafb",
              borderRadius: "20px",
              border: "1px dashed #d1d5db",
            }}
          >
            <h4
              className="fw-bold"
              style={{ color: "#111827" }}
            >
              No Tasks Yet
            </h4>

            <p
              className="mb-0"
              style={{ color: "#6b7280" }}
            >
              Create your first task and start organizing your day.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default TodoList;