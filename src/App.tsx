import React from 'react';
import { Wrapper } from './components/Wrapper/Wrapper';
import mainImg from './assets/mainImg.jpg';

function App() {
  return (
    <Wrapper>
      <div className="left">
        <img src={mainImg} />
      </div>
    </Wrapper>
  );
}

export default App;
