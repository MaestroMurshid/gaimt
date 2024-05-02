import React from 'react';
import styles from './Buttons.module.css'; // Import CSS file for styles

function Buttons() {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.generateButton}>Generate</button>
      <button className={styles.projectsButton}>Projects</button>
    </div>
  );
}

export default Buttons;
