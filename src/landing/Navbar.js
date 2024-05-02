import React, { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { text: 'Home', path: '/', icon: 'home.png' }, // Replace with your image path
    { text: 'Saved', path: '/saved', icon: 'saved.png' }, // Replace with your image path
    { text: 'Templates', path: '/templates', icon: 'templates.png' }, // Replace with your image path
    { text: 'Generate', path: '/generate', icon: 'generate.png' }, // Replace with your image path
  ];

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle isOpen state on click
  };

  return (
    
    <nav className={`${styles.navbar} ${isOpen ? styles.expanded : styles.collapsed}`}>
      <img src="GAMMA.png" alt="Your logo" className={styles.logo} />
      
      <button className={styles.toggleButton} onClick={toggleNavbar}>
      </button>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.text} className={styles.navItem}>
            <a href={item.path} className={styles.navLink}>
              <img src={require(`./assets/${item.icon}`)} alt={item.text} className={styles.navIcon} /> {/* Import icon images */}
              {isOpen && item.text} {/* Display text only when expanded */}
            </a>
          </li>
        ))}
      </ul>
      {/* Add your entry box component here */}
      
    </nav>
   
  );
}

export default Navbar;



