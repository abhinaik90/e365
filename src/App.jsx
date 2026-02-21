import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLogin from "./pages/MainLogin";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import PrincipalLogin from "./pages/PrincipalLogin";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import PrincipalDashboard from "./pages/PrincipalDashboard";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/principal-login" element={<PrincipalLogin />} />

        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
        <Route path="/principal-dashboard" element={<PrincipalDashboard />} />
        <Route path="/Login" element={< Login />} />
      </Routes>
    </Router>
  );
}

export default App;