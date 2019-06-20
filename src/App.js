import React from 'react';

import { styled } from 'baseui';

import Buttons from './examples/button';

import './App.css';

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});
 const Name = styled('span', {
   marginRight: '10px'
 });
function App() {
  return (
    <div className="App">
      <Buttons/>
    </div>
  );
}

export default App;
