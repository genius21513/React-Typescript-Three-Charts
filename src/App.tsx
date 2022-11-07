import React from 'react';
import './App.css';

import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import PieCt from './components/PieCt';
import HBarCt from './components/HBarCt';
import HisCt from './components/HisCt';
import { ChartDesc, TopDesc } from './components/Desc';
import { ChartCard } from './components/ChartCard';


// if (registerables?.length > -1 )
//   Chart.register(...registerables, ChartDataLabels);

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(()=>{
    if (typeof registerables != 'undefined') {
      Chart.register(...registerables, ChartDataLabels);
      setLoading(false);
    }
  },[]);
  
  return (
    <>
      <div className="App font-mono min-h-screen flex bg-gradient-to-r from-slate-800 to-slate-700" data-testid="app-label">
        {
          !loading &&
          <div className='container mx-auto flex flex-col justify-center'>
            <TopDesc />
            <div className='flex flex-col md:flex-row'>
              <ChartCard className='md:w-1/5'>
                <PieCt />
                <ChartDesc desc="Holder Wallets" />
              </ChartCard>
              <ChartCard className='md:w-2/5'>
                <HBarCt />
                <ChartDesc desc="Unique Holders"/>
              </ChartCard>          
              <ChartCard className='md:w-2/5'>
                <HisCt />            
                <ChartDesc desc="Holder Distribution"/>
              </ChartCard>          
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default App;
