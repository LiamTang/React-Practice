import React from 'react';
import Button from '../../Components/Button';
import './index.css';

export default function Outlined() {
  return (
    <div className="container">
      <h2>Outlined Buttons</h2>
      <div className="warp">
        <div>
          <Button type="outlined"> DEFAULT </Button>
          <Button type="outlined" color="primary">
            PRIMARY
          </Button>
          <Button type="outlined" color="secondary">
            SECONDARY
          </Button>
          <Button type="outlined" color="disabled">
            DISABLED
          </Button>
        </div>
      </div>
    </div>
  );
}
