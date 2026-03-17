import React from 'react';
import DaisyNav from './component/DaisyNav/DaisyNav';
import Navbar from './component/Navbar/Navbar';
import Pricing from './component/Pricing/Pricing';
import ResultChart from './component/resultChart/resultChart';
import MarkChart from './component/MarkChart/MarkChart';
import R2 from './component/resultChart/R2';
import R3 from './component/resultChart/R3';
import R4 from './component/resultChart/R4';
import M2 from './component/MarkChart/M2';

const App = () => {
  return (
    <div>
      <header className='max-w-[90%] mx-auto py-7'>
          <Navbar></Navbar>
          {/* <DaisyNav></DaisyNav> */}
      </header>

      <main className='max-w-[90%] mx-auto py-0'>
          <Pricing></Pricing>
          {/* <ResultChart></ResultChart>
          <MarkChart></MarkChart> */}

          <R2></R2>
          <R3></R3>
          <R4></R4>

          <M2></M2>

      </main>
      
    </div>
  );
};

export default App;