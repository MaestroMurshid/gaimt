import React from 'react';
import styles from './EntryBox.module.css'; // Import CSS file for styles

function EntryBox(props) {
  const { placeholder, onChange } = props; // Access props

  return (
    <div className={styles.entryBox}>
      <input
        type="text"
        placeholder={"Enter Prompt..."} // Set placeholder text
        className={styles.searchInput}
        onChange={onChange} // Handle input change
      />
    </div>
  );
}

export default EntryBox;
