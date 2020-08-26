import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  return (
    <main>
      <div>
        <Button> Default Button </Button>
        <Button color="red"> Red Button </Button>
        <Button color="black"> Black Button </Button>
      </div>
    </main>
  );
}

export default App;
