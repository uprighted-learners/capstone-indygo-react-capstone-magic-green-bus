import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

export default function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error('Authentication failed');
      }
      const data = await response.json();
      alert('Login successful');
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);

      navigate('/');
      window.location.reload();

      setUsername('');
      setPassword('');
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
          email: email,
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
  // if(setIsLoggedIn(true)){
  //  document.getElementById("logOutBtn").disable = false
  // }

  return (
   <div>
    {isLoginMode ? (
        <div>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
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
              Email:
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

      </p>
      <div className='auth-pic'>
        <img
          style={{ width: '50%' }}
          src='https://i.etsystatic.com/8174292/r/il/48a81a/3632435075/il_1588xN.3632435075_26nn.jpg'
          alt='IndyGo Bus'
        />
      </div>
    </div>
  )}
</div>
  ) 
}