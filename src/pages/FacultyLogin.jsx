import { useNavigate } from "react-router-dom";
import "../Login.css";

export default function FacultyLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/faculty-dashboard");
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Faculty Login</h2>
        <input type="email" placeholder="Faculty Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}