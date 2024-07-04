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
      console.log(response);
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


  // const updatePassword = async () => {//make a notification/form to navigate to when a button is selected
  //   try {
  //     const response = await fetch("http://localhost:3000/users/updateUser", {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({//allowing the user to change their password ONLY!
  //         password: password,
  //       }),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Update failed");
  //     }
  //     const data = await response.json();//parsing our data to be able to use it outside of our fetch

  //     setUpdatedUserPassword('', data.password)//sas that the input field for setUpadtedUserPassword is expected to be a string that is directly related to the password our Database has already
  //     alert("updated successfully.");//user feedback

  //   } catch (error) {
  //     console.error("Signup error:", error.message);
  //   }
  // };

  
  
  const continueGuest = () => {
     setIsGuest(true);//just setting setIsGuest to true because we don't want that to count as being logged in incase permissions variy for logged in users vs Guests down the road
     navigate("/")
  }

  // guestButton.addEventListener("click", function(){
  //   continueGuest();
  // })

// if(isLoginMode) {
//   localStorage.getItem("token").then()
// }
// const deleteUser = async () => {
// try{
//   const response = await fetch("http://localhost:3000/users/deleteUser", {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
    
      
//     }),
//   });
//   if(!response.ok){
//     throw new Error("Delete failed");
//   }

// }catch(error){
// console.log(error);
// }
// }
// const deleteButton = document.getElementById("deleteButton");
// deleteButton.addEventListener("click", function(){
//   const userId = this.localStorage.getItem("Id");
//   console.log(userId)
//   deleteUser(userId);
// })

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
            </label>
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
          <label>username: 
          <input className='username-input-login'type='username' value={username} onChange={(e) => setUsername(e.target.value)} required></input><br></br>
          </label>
          <label>password:<input  className='password-input-login' type='password' value={password} onChange={(e)=> setPassword(e.target.value)} required></input></label>
         </div>}
        <button className='Login-Button' type="submit">{isLoginMode ? "Login" : "Sign Up"}</button>
      </form>
      <p>
        {isLoginMode ? "Don't have an account?" : "Already have an account?"}
        <button type="button" onClick={toggleLoginMode}>
          {isLoginMode ? "Sign Up" : "Login"}
        </button>
        {localStorage.getItem("token") && !isGuest ?
        <button   onClick={(logoutUser)} onChange={console.log("hi")}> Logout </button> : null
        }
        <button id="guestButton" onClick={(continueGuest)}>Continue as Guest</button>
      </p>
    </div>
   </div>
  )
};
