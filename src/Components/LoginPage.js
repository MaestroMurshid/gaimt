import React, { useState } from 'react';
import styles from './LoginPage.module.css'; // Import styles for the login page
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  let navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const isValid = validateCredentials(username, password); 

    if (isValid) {
      console.log('Login successful!');
      alert("Login Successful");
      let path = `/generate`; 
      navigate(path);

    } else {
      setErrorMessage('Invalid username or password.'); 

    }
  };

  return (
  <div style={{
    marginLeft: "400px",
    display: "flex",
    alignItems: "center"
}}>
      <div className={styles.login}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", width: "500px", flexDirection: "column" }}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    
  );
}
export default LoginPage;


function validateCredentials(username, password) {

  return username === 'admin' && password === '123';
}

