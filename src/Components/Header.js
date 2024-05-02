import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const navigationLinks = [
   
    { text: 'Login', href: '#' }, // Replace 'Contact' with 'Sign Up'
  ];

  return (
    <header className={styles.header}>
      <img src="GAMMA.png" alt="logo" className={styles.logo} />
      <h2>Gen AI Marketing Tool</h2>     

      {/* Navigation links displayed horizontally */}
      <nav className={styles.nav}>
        <ul className={styles.navList}> {/* Added a class for styling */}
          {navigationLinks.map((link) => (
            <li key={link.text} className={styles.navItem}>
              {link.text === 'Login' ? (
                <Link to="/login" className={styles.loginButton}>{link.text}</Link>
              ) :(
                <a href={link.href}>{link.text}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
