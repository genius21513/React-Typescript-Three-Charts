import React from 'react';
import './App.css';

import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import PieCt from './components/PieCt';
import HBarCt from './components/HBarCt';
import HisCt from './components/HisCt';

var dataJson = require('./api/data.json');

Chart.register(...registerables, ChartDataLabels);

function App() {
  return (
    <div className="App min-h-screen overflow-hidden">
      <div className='container mx-auto py-24 px-2'>
        <div>
          <h1 className='my-auto text-7xl sm:text-6xl md:text-5xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200'>Three Charts</h1>
          
        </div>
        <div className='md:flex flex-column gap-5 items-center mt-12 shadow-md hover:shadow-lg bg-gray-800 rounded-lg py-6'>
          <div className='md:w-2/5 sm:w-full p-2'>
            <HBarCt />
          </div>
          <div className="md:w-1/5 w-1/2 p-2 mx-auto">
            <PieCt />
          </div>
          <div className='md:w-2/5 sm:w-full p-2'>
            <HisCt />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
