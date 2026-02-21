import { useNavigate } from "react-router-dom";
import "../Login.css";

export default function PrincipalLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/principal-dashboard");
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Principal Login</h2>
        <input type="email" placeholder="Principal Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}