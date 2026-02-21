import { useNavigate } from "react-router-dom";
import "../Login.css";

export default function MainLogin() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login As</h2>

        <button className="role-btn" onClick={() => navigate("/student-login")}>
          Student
        </button>

        <button className="role-btn" onClick={() => navigate("/faculty-login")}>
          Faculty
        </button>

        <button className="role-btn" onClick={() => navigate("/principal-login")}>
          Principal
        </button>
      </div>

      <div className="image-section">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="login"
        />
      </div>
    </div>
  );
}