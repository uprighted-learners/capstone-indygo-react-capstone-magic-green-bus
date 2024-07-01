import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

  const authenticateUser = async (url, errorMessage) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error(errorMessage);
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      alert('Authentication successful.');
      navigate("/");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Authentication error:", error.message);
      alert(errorMessage);
    }
  };

  const loginUser = () => authenticateUser(`${process.env.REACT_APP_API_URL}/users/login`, "Login failed");
  const createUser = () => authenticateUser(`${process.env.REACT_APP_API_URL}/users/register`, "Signup failed");

  const handleSubmit = (event) => {
    event.preventDefault();
    isLoginMode ? loginUser() : createUser();
  };

  const logoutUser = () => {
    localStorage.clear();
    setIsLoginMode(true);
    alert('Logout successful.');
    navigate("/");
  };

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
        <button   onClick={(logoutUser)} onChange={console.log("hi")}> Logout </button>
        {/* <button type='button' onClick={(updatePassword)}>Forgot your password?</button> */}
        {/* <button id='deleteButton'>Delete</button> */}
      </p>
      <div>
       
        {/* <div className="auth-pic">
          <img
            style={{ width: "50%" }}
            src="https://i.etsystatic.com/8174292/r/il/48a81a/3632435075/il_1588xN.3632435075_26nn.jpg"
            alt="IndyGo Bus"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          consequat nisi id risus malesuada, vitae commodo nulla efficitur. Sed
          at volutpat leo, at fermentum neque. Aliquam erat volutpat. Fusce
          auctor sapien a mauris ullamcorper, a interdum elit vehicula.
          Phasellus in justo sit amet odio sodales vehicula sit amet eget magna.
          Ut vel ligula vitae turpis dignissim lacinia. Curabitur sit amet eros
          ut lacus aliquam blandit. Sed ut arcu purus. Suspendisse potenti.
          Morbi non metus nulla. Donec dictum fringilla nisl, eget consectetur
          felis tempus id. Cras et viverra turpis. Vestibulum faucibus dui in
          velit vulputate, a cursus risus tristique. Integer scelerisque, metus
          at ultricies pulvinar, orci libero tristique est, in suscipit ex velit
          nec dolor. Maecenas tempor, nunc non facilisis venenatis, justo lacus
          convallis erat, at porttitor mi magna sit amet eros. Etiam eget ligula
          sit amet neque blandit faucibus a et tortor. Aenean sit amet erat sit
          amet elit efficitur pellentesque. Nam vehicula sapien nec urna
          efficitur vestibulum. Mauris sit amet malesuada turpis. Nullam non
          urna id justo egestas gravida vel ut felis. Suspendisse ultrices,
          risus id facilisis ullamcorper, libero felis varius felis, et cursus
          dui velit non nulla.
        </p>
      </div>
      <div className="fillerPicture">
        <img
          style={{ width: "50%" }}
          src="https://i.etsystatic.com/8174292/r/il/48a81a/3632435075/il_1588xN.3632435075_26nn.jpg"
          alt="IndyGo Bus"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          consequat nisi id risus malesuada, vitae commodo nulla efficitur. Sed
          at volutpat leo, at fermentum neque. Aliquam erat volutpat. Fusce
          auctor sapien a mauris ullamcorper, a interdum elit vehicula.
          Phasellus in justo sit amet odio sodales vehicula sit amet eget magna.
          Ut vel ligula vitae turpis dignissim lacinia. Curabitur sit amet eros
          ut lacus aliquam blandit. Sed ut arcu purus. Suspendisse potenti.
          Morbi non metus nulla. Donec dictum fringilla nisl, eget consectetur
          felis tempus id. Cras et viverra turpis. Vestibulum faucibus dui in
          velit vulputate, a cursus risus tristique. Integer scelerisque, metus
          at ultricies pulvinar, orci libero tristique est, in suscipit ex velit
          nec dolor. Maecenas tempor, nunc non facilisis venenatis, justo lacus
          convallis erat, at porttitor mi magna sit amet eros. Etiam eget ligula
          sit amet neque blandit faucibus a et tortor. Aenean sit amet erat sit
          amet elit efficitur pellentesque. Nam vehicula sapien nec urna
          efficitur vestibulum. Mauris sit amet malesuada turpis. Nullam non
          urna id justo egestas gravida vel ut felis. Suspendisse ultrices,
          risus id facilisis ullamcorper, libero felis varius felis, et cursus
          dui velit non nulla.
        </p> */}
      </div>
    </div>
   </div>
  )
};
