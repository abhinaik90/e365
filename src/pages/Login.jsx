import React, { useState } from "react";
import "./LoginPage.css";

export default function Login() {
  const [role, setRole] = useState("student");

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-section">
          <div className="logo-circle">GU</div>
          <h1>Gopalan PU College</h1>
          <p className="tagline">KNOWLEDGE · EXCELLENCE · INNOVATION</p>
        </div>

        <h2>Welcome Back</h2>
        <p className="subtitle">Sign in to access the student portal</p>

        <div className="role-selector">
          <button
            className={role === "student" ? "active" : ""}
            onClick={() => setRole("student")}
          >
            Student
          </button>
          <button
            className={role === "staff" ? "active" : ""}
            onClick={() => setRole("staff")}
          >
            Staff
          </button>
          <button
            className={role === "admin" ? "active" : ""}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
        </div>

        <div className="input-group">
          <label>Username</label>
          <input type="text" placeholder="Enter your ID" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <div className="forgot">
          <a href="#">Forgot Password?</a>
        </div>

        <button className="login-btn">Sign In</button>

        <div className="demo-box">
          <p><strong>Demo Credentials</strong></p>
          <p>Student: student01 / pass123</p>
          <p>Staff: staff01 / staff123</p>
          <p>Admin: admin / admin123</p>
        </div>
      </div>
    </div>
  );
}