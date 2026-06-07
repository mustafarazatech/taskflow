import React from "react";

const Footer = () => {
  return (
    <footer
      className="mt-auto py-4"
      style={{
        background: "#111827",
        color: "#e5e7eb",
        borderTop: "1px solid #374151",
      }}
    >
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="fw-bold mb-1">TaskNest</h5>
            <p className="mb-0 text-secondary">
              Organize tasks. Stay productive. Get things done.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <p className="mb-1">
              © {new Date().getFullYear()} TaskNest
            </p>
            <small className="text-secondary">
              Built with React & Bootstrap
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;