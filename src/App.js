import React from 'react';
import styled from 'styled-components';
import Home from './pages/home.jsx';

const Button = styled.button`
  background-color: rgb(255, 255, 255);
  width: 200px;        /* sets the width */
  height: 50px;        /* sets the height */
  font-size: 18px;     /* controls the text size inside */
  padding: 10px 20px;  /* controls the space inside the button */
  bottom: 500px;
  right: 1400px;
`;

function clickMe() {
  alert('You clicked me!');
}

function App() {
  return (
    <div>
      <Home />
      <Button onClick={clickMe}>
        My Portfoio
      </Button>
    </div>
  );
}

export default App;
