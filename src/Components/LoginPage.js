import React, { useState } from 'react';
import styles from './LoginPage.module.css'; // Import styles for the login page

function LoginPage() {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement login logic here (replace with your actual logic)
    // - Validate username and password (e.g., check against a database or API)
    // - Handle successful login (e.g., redirect to another page or store user data)
    // - Handle failed login (e.g., display an error message)

    const isValid = validateCredentials(username, password); // Replace with your validation logic

    if (isValid) {
      // Login successful (replace with desired action)
      console.log('Login successful!');
      // Redirect or update state to indicate successful login
    } else {
      setErrorMessage('Invalid username or password.'); // Display error message
    }
  };

  return (
    <div className={styles.login}>

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
  );
}
export default LoginPage;

// Example validation function (replace with your actual logic)
function validateCredentials(username, password) {
  // Simulate validation against a database or API
  return username === 'admin' && password === 'password123';
}

