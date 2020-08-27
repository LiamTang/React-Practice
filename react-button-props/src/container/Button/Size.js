import React from 'react';
import Button from '../../Components/Button';
import './index.css';

export default function Size() {
  return (
    <div className="container">
      <h2>Sizes</h2>
      <div className="warp">
        <div>
          <Button type="outlined" color="primary" size="small">
            Small
          </Button>
          <Button type="outlined" color="primary" size="medium">
            Medium
          </Button>
          <Button type="outlined" color="primary" size="large">
            Large
          </Button>
        </div>
        <div>
          <Button type="contained" color="primary" size="small">
            Small
          </Button>
          <Button type="contained" color="primary" size="medium">
            Medium
          </Button>
          <Button type="contained" color="primary" size="large">
            Large
          </Button>
        </div>
      </div>
    </div>
  );
}
