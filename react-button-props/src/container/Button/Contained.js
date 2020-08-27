import React from 'react';
import Button from '../../Components/Button';
import './index.css';

export default function Contained() {
  return (
    <div className="container">
      <h2>Contained Buttons</h2>
      <div className="warp">
        <div>
          <Button type="contained"> DEFAULT </Button>
          <Button type="contained" color="primary">
            PRIMARY
          </Button>
          <Button type="contained" color="secondary">
            SECONDARY
          </Button>
          <Button type="contained" color="disabled">
            DISABLED
          </Button>
        </div>
      </div>
    </div>
  );
}
