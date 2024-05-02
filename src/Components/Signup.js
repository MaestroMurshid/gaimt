import React, { useState } from 'react';
import styles from './Signup.module.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement signup logic here (e.g., validation, API call)
    // - Validate user input (username, email, password)
    // - Send signup data to an API or backend for user creation
    // - Handle successful signup (e.g., redirect to login page)
    // - Handle failed signup (e.g., display error message)

    const isValid = validateCredentials(username, email, password); // Replace with your validation logic
    if (isValid) {
      console.log('Signup successful!');
      // Handle successful signup
    } else {
      setErrorMessage('Invalid username, email, or password.'); // Display error message
    }
  };

  return (
    <div className={styles.signup}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;

// Example validation function (replace with your actual logic)
function validateCredentials(username, email, password) {
  // Simulate validation of username, email, and password
  return username.length >= 6 && email.includes('@') && password.length >= 8;
}
