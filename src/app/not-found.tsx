"use client";
import Link from "next/link";

const NotFound = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light"
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#333",
        padding: "20px",
      }}
    >
      <h1 className="display-4 fw-bold">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="lead">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" className="btn btn-primary mt-3">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;