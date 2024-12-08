import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible,setIsPasswordVisible]=useState(false)
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }
    
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email) {
      alert("This email is already registered. Please login.");
      navigate("/login");
      return;
    }

    const userData = { name, email, password };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("User registered successfully! Please login.");
    navigate("/login");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form-container">
          <div className="login-header">
            <h2>Register</h2>
            <p>Create a new account to get started</p>
          </div>

          <form onSubmit={handleSignup} className="login-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
                 <button 
                  type="button" 
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <button type="submit" className="login-button">
              Register
            </button>

            <div className="signup-link">
              <p>
                Already have an account?
                <button
                  onClick={() => navigate("/login")}
                  className="signup-text"
                >
                  Login here
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
