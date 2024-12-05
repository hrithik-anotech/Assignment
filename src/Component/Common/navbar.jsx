import React from "react";
import { useNavigate,Link } from "react-router-dom";
import '../../styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/business">Business</Link>
        </li>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
        <li>
          <Link to="/sports">Sports</Link>
        </li>
        <li>
          <Link to="/science">Science</Link>
        </li>
        <li>
          <Link to="/entertainment">Entertainment</Link>
        </li>
      </ul>
      <button className="logout-button" onClick={()=>navigate('/login')}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
