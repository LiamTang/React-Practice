import React, { useState } from 'react';
import styles from './styles.module.css';

export default function Gradient() {
  //default color
  const [color1, setColor1] = useState('#00f260');
  const [color2, setColor2] = useState('#0575e6');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'color1') {
      setColor1(value);
    }
    if (name === 'color2') {
      setColor2(value);
    }
  };

  const handleDefault = () => {
    setColor1('#00f260');
    setColor2('#0575e6');
  };
  return (
    <div
      className={styles.container}
      style={{ background: `linear-gradient(75deg, ${color1}, ${color2})` }}
    >
      <div className={styles.inputGroup}>
        <label>Please Select the First Color</label>
        <input
          type="color"
          name="color1"
          className={styles.inputColor}
          value={color1}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Please Select the Second Color</label>
        <input
          type="color"
          name="color2"
          className={styles.inputColor}
          value={color2}
          onChange={handleInputChange}
        />
      </div>
      <button className={styles.button} onClick={handleDefault}>
        Reset
      </button>
    </div>
  );
}
