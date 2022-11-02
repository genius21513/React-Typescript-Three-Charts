import React from 'react';
import { Doughnut } from 'react-chartjs-2';
var dataJson = require('../api/data.json');

function PieCt() {
  const l = dataJson.names.reverse();  

  const d = () => {
    let ar : Array<number> = dataJson.unique_holders.reverse();
    let s = ar.reduce((a, b) => a + b);
    let ra : Array<number> =  ar.map((v, i) => Number.parseFloat((v * 100 / s).toFixed(1)));
    return ra;
  }

  const options : any = {  
    layout: {
      padding: 2
    },    
    cutout: '70%',
    radius: '100%',
    plugins: {
      legend: {
        display: false,
      },    
      datalabels: {
        formatter: function (v : number, c : any) {        
          return v + '%';
        },
        // display: false,
        color: "white",
        font: {
          size: '10',  
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
    // borderColor: '#ffffff',
    borderWidth: 0,
    hoverOffset: 5,
    offset: 2,    
  };
  
  const data = {
    labels: l,
    datasets: [
      {
        data: d(),
        backgroundColor: [
          '#129CFF',
          '#0C6DB3',
          '#FF6384',
          '#00FFFF',
        ],      
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
