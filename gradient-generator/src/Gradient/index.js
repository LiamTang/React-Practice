import React, { useState } from 'react';
import styles from './styles.module.css';

export default function Gradient() {
  //default color
  const [color1, setColor1] = useState('#6ad294');
  const [color2, setColor2] = useState('#8675e6');
  const [deg, setDeg] = useState(75);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'color1') {
      setColor1(value);
    }
    if (name === 'color2') {
      setColor2(value);
    }
    if (name === 'angle') {
      setDeg(value);
    }
  };

  const handleDefault = () => {
    setColor1('#6ad294');
    setColor2('#8675e6');
    setDeg(75);
  };
  return (
    <div className={styles.container}>
      <h2>CSS Gradient</h2>
      <div
        className={styles.display}
        style={{
          background: `linear-gradient(${deg}deg, ${color1}, ${color2})`,
        }}
      ></div>
      <div className={styles.wrap}>
        <div className={styles.inputGroup}>
          <label>Color One</label>
          <input
            type="color"
            name="color1"
            className={styles.inputColor}
            value={color1}
            onChange={handleInputChange}
          />
          <span>{color1}</span>
        </div>
        <div className={styles.inputGroup}>
          <label>Color Two</label>
          <input
            type="color"
            name="color2"
            className={styles.inputColor}
            value={color2}
            onChange={handleInputChange}
          />
          <span>{color2}</span>
        </div>
        <div>
          <label>Angle</label>
          <input
            className={styles.degree}
            type="text"
            name="angle"
            value={deg}
            onChange={handleInputChange}
          />
        </div>

        <button className={styles.button} onClick={handleDefault}>
          Reset
        </button>
      </div>

      <div className={styles.codeEditor}>
        <p className={styles.title}>background</p>
        <p className={styles.cssInfo}>
          : linear-gradient({deg}deg, {color1}, {color2});
        </p>
      </div>
    </div>
  );
}
