import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true); //tracking login state
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
      alert("Authentication successful.");
      navigate("/");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
      console.error("Authentication error:", error.message);
      alert("Invalid credentials. Please try again.");   
      setUsername("");
      setPassword("");
    }
  };

  const loginUser = () => authenticateUser(`${process.env.REACT_APP_API_URL}/users/login`, "Login failed");
  const createUser = () => authenticateUser(`${process.env.REACT_APP_API_URL}/users/register`, "Signup failed");
  
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
    alert("Logout successful.");
    navigate("/");
  };
  
  const continueGuest = () => {
     setIsGuest(true);//just setting setIsGuest to true because we don't want that to count as being logged in incase permissions variy for logged in users vs Guests down the road
     navigate("/")
  }

  return (
   <div>
        <div className="container-section">
      <h1 className='Login-Title'>{isLoginMode ? "Login" : "Sign Up"}
      <label className='prompt-overlay'>To Sponsor A Stop</label>
      </h1>
      <form onSubmit={handleSubmit}>
        {!isLoginMode ? (
          <>
            <label className='username-label'>
              Username:
              <input
              className='username-input-signup'
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label><br></br>
            <label>
              Password:
              <input
              className='password-input-signup'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
         
          </>
         
        ): <div>
          <label>Username: 
          <input className='username-input-login'type='username' value={username} onChange={(e) => setUsername(e.target.value)} required></input><br></br>
          </label>
          <label>Password:<input  className='password-input-login' type='password' value={password} onChange={(e)=> setPassword(e.target.value)} required></input></label>
         </div>}
  
      </form>
      <div className='button-container'>
      <button className='Ternary-Button' type="submit">{isLoginMode ? "Login" : "Sign Up"}</button>
       <div className="ternary-text"> {isLoginMode ? "Don't have an account?" : "Already have an account?"}</div>
        <button className="signup-or-login" type="button" onClick={toggleLoginMode}>
          {isLoginMode ? "Sign Up" : "Login"}
        </button>
        {localStorage.getItem("token") && !isGuest ?
        <button onClick={(logoutUser)}> Logout </button> : null
        }
        <button className="guestButton" onClick={(continueGuest)}>Continue as Guest</button>
      </div>
    </div>
   </div>
  )
};
