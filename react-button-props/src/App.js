import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  return (
    <main>
      <div>
        <Button> Default Button </Button>
        <Button color="primary"> Red Button </Button>
        <Button color="secondary"> Black Button </Button>
        <Button color="disabled"> Black Button </Button>
      </div>
    </main>
  );
}

export default App;
