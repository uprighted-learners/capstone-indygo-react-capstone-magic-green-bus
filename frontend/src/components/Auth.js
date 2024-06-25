import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isGuest, setIsGuest] = useState(false);
  const navigate = useNavigate();

  const authenticateUser = async (url, errorMessage) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) throw new Error(errorMessage);
      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      alert('Authentication successful.');
      navigate("/");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  };

  const loginUser = () => authenticateUser("http://localhost:8080/users/login", "Login failed");
  const createUser = () => authenticateUser("http://localhost:3000/users/register", "Signup failed");

  const handleSubmit = (event) => {
    event.preventDefault();
    isLoginMode ? loginUser() : createUser();
  };

  const toggleLoginMode = () => {
    setIsLoginMode(!isLoginMode);
    setIsGuest(false);
  };

  const logoutUser = () => {
    localStorage.clear();
    setIsLoginMode(true);
    navigate("/");
  };

  const continueAsGuest = () => {
    setIsGuest(true);
    navigate("/");
  };

  return (
    <div>
      {isGuest}
      <h1>{isLoginMode ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        {!isLoginMode && (
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
        )}
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">{isLoginMode ? "Login" : "Sign Up"}</button>
      </form>
      <p>
        {isLoginMode ? "Don't have an account?" : "Already have an account?"}
        <button type="button" onClick={toggleLoginMode}>
          {isLoginMode ? "Sign Up" : "Login"}
        </button>
        {isLoginMode && <button type="button" onClick={logoutUser}>Logout</button>}
        <button type="button" onClick={continueAsGuest}>Continue as Guest</button>
      </p>
    </div>
  );
}
