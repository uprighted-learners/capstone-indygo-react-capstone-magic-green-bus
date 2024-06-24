
import React, { useState } from "react";//declaring react and useState to apply it within the project
import { useNavigate } from "react-router-dom";//declaring our imports to navigate through the website

export default function Auth() {//our authentication funciton responsible for executing all the authentication functions within it
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);//tracking login state
  const [isGuest, setIsGuest] = useState(false);
  const [updatedUserName, setUpdatedUserName] = useState('')//these will be used for the update form although hasnt been made yet
  const [updatedUserPassword, setUpdatedUserPassword] = useState('')
  const navigate = useNavigate();//making a variable for navigation

  
  const loginUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/login", {//fetching from the backend in this case from our local host at the end point directly related to the login process
        method: "POST",//declaring a method of POST to the backend
        headers: {

          "Content-Type": "application/json",//setting the headers for the JSON response

        },
        body: JSON.stringify({//setting the body for the JSON response to strings 
          username: username,//data turned to a string so our inputs will expect strings
          password: password,
        }),
      });
      if (!response.ok) {

        throw new Error("Authentication failed");//validating the response failed and throwing an erorr
      }
     
      const data = await response.json();//response.json is method that reads the response body and parses it as JSON returing a promise that resolved with the result of parsing the body text as JSON data
      //also uses the await keyword that sas to await the response until the promise(response) is resolved
      alert("Login successful");//user feedback saying the login was successful
      navigate("/"); //naviagates to the home page(but currently ineffective)
      localStorage.setItem("token", data.token);//storing our authentication token via key value pairs token' as the key and data.token as its value
      localStorage.setItem("username", data.username);//similar to the previous line storing our username associated with the token above
      window.location.reload();

      setUsername("");//when a user is logging in, our server expects the username to be a string
      setPassword("");

      setIsLoginMode(true);
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  const createUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error("Signup failed");//this crashes backend 
      }
      alert('Signup successful, please log in.');
      setIsLoginMode(true);
      navigate('/')
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLoginMode) {
      loginUser();
    } else {
      createUser();
    }
  };

  const toggleLogin = () => {
    setIsLoginMode(!isLoginMode);
  };
  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoginMode(false);
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
        <div>
      <h1>{isLoginMode ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        {!isLoginMode ? (
          <>
            <label>
              Username:
              <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label>
              Password:
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </>
        ): <div>
          <label>username: 
          <input type='username' value={username} onChange={(e) => setUsername(e.target.value)} required></input>
          </label>
          <label>password:<input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} required></input></label>
         </div>}
        <button type="submit">{isLoginMode ? "Login" : "Sign Up"}</button>
      </form>
      <p>
        {isLoginMode ? "Don't have an account?" : 'Already have an account?'}
        <button type='button' onClick={toggleLogin}>
          {isLoginMode ? 'Sign Up' : 'Login'}
        </button>
        <button type='button' onClick={(logoutUser)}Logout>Logout</button>
        <button id="guestButton" onClick={(continueGuest)}>Continue as Guest</button>
        {/* <button type='button' onClick={(updatePassword)}>Forgot your password?</button> */}
        {/* <button id='deleteButton'>Delete</button> */}
      </p>
      <div className='auth-pic'>
        <img
          style={{ width: '50%' }}
          src='https://i.etsystatic.com/8174292/r/il/48a81a/3632435075/il_1588xN.3632435075_26nn.jpg'
          alt='IndyGo Bus'
        />
      </div>
    </div>

</div>
  ) 
}