import { useNavigate } from "react-router-dom";
import "../Login.css";

export default function StudentLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/student-dashboard");
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Student Login</h2>
        <input type="email" placeholder="Student Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}