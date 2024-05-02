import React from 'react';
import styles from './UserLogout.module.css';

function UserLogout() {
  const handleLogout = () => {
    // Implement your logout functionality here (e.g., sending a request to server)
    console.log('Logout clicked!');
  };

  return (
    <div className={styles.userLogout}>
      <img src="./assets/user.png" alt="User" className={styles.userIcon} /> {/* Replace with your image path */}
      <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserLogout;
