import React from 'react';
import DaisyNav from './component/DaisyNav/DaisyNav';
import Navbar from './component/Navbar/Navbar';
import Pricing from './component/Pricing/Pricing';
import ResultChart from './component/resultChart/resultChart';
import MarkChart from './component/MarkChart/MarkChart';

const App = () => {
  return (
    <div>
      <header className='max-w-[90%] mx-auto py-7'>
          <Navbar></Navbar>
          {/* <DaisyNav></DaisyNav> */}
      </header>

      <main className='max-w-[90%] mx-auto py-0'>
          <Pricing></Pricing>
          <ResultChart></ResultChart>
          <MarkChart></MarkChart>

      </main>
      
    </div>
  );
};

export default App;