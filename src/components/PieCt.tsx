import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import dataJson from '../api/data.json';

function PieCt() {
  const l = dataJson.names;

  const d = () => {
    const ar : Array<number> = dataJson.unique_holders;
    const s = ar.reduce((a, b) => a + b);
    const ra : Array<number> =  ar.map((v, i) => Number.parseFloat((v * 100 / s).toFixed(1)));
    return ra;
  }

  const c = () => {
    return dataJson.color;
  }

  const options : any = {    
    cutout: '70%',
    radius: '95%',
    plugins: {
      legend: {
        display: false,
      },    
      datalabels: {
        formatter: function (v : number, c : any) {        
          return v + '%';
        },
        display: true,
        color: "white",
        font: {
          size: 12,
        }
      },
      tooltip: {
        callbacks: {
          label: (context : any) => {
            return context.label + ' : ' + context.formattedValue + '%';
          }
        }
      }
    },
    borderWidth: 0,
    hoverOffset: 5,
    offset: 2, 
  };
  
  const data = {
    labels: l,
    datasets: [
      {
        data: d(),
        backgroundColor: c()
      },
    ],
  };

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
}

export default PieCt;
