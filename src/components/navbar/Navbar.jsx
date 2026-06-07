import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
      }}
    >
      <div className="container">
        <NavLink
          className="navbar-brand d-flex align-items-center gap-3"
          to="/"
        >
      

          <div>
            <h5
              className="m-0 fw-bold"
              style={{
                color: "#111827",
                letterSpacing: "0.5px",
              }}
            >
              TaskFlow
            </h5>

            <small
              style={{
                color: "#6b7280",
                fontSize: "12px",
              }}
            >
              Organize your day
            </small>
          </div>
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <NavLink
                to="/create-todo"
                className={({ isActive }) =>
                  `nav-link px-4 py-2 rounded-pill fw-semibold ${
                    isActive
                      ? "text-white"
                      : "text-dark"
                  }`
                }
                style={({ isActive }) => ({
                  backgroundColor: isActive
                    ? "#10b981"
                    : "transparent",
                  transition: "all 0.3s ease",
                })}
              >
                Add Task
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/todo-list"
                className={({ isActive }) =>
                  `nav-link px-4 py-2 rounded-pill fw-semibold ${
                    isActive
                      ? "text-white"
                      : "text-dark"
                  }`
                }
                style={({ isActive }) => ({
                  backgroundColor: isActive
                    ? "#10b981"
                    : "transparent",
                  transition: "all 0.3s ease",
                })}
              >
                My Tasks
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;