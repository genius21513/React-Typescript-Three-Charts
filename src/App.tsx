import React from 'react';
import './App.css';

import PieCt from './components/PieCt';
import BarCt from './components/BarCt';

function App() {
  return (
    <div className="App">
      <div className='container mx-auto h-screen'>
        <h3 className='text-center font-bold text-lg pt-12'>Three Charts</h3>
        <div className='flex mt-12 gap-2 mx-5'>
          <div className="w-1/5 my-auto">
            <PieCt />
          </div>
          <div className='w-2/5 my-auto'>
            <BarCt />
          </div>
          <div className='w-2/5 my-auto'>
            <BarCt />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
