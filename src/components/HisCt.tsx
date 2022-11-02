import React from 'react';
import { Bar } from 'react-chartjs-2';

var dataJson = require('../api/data.json');

function HisCt() {
  const l = dataJson.names;

  const d = () => {
    let ra : Array<number> = dataJson.distribution;
    return ra;
  }

  const options : any = {
    scales: {
      x: {        
        grid: {
          drawBorder: false,
          display: false,
        }
      },
      y: {        
        grid: {
          drawBorder: false,
          display: false
        }
      },
    },
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
          size: 12,
        }
      },
      tooltip: {
        callbacks: {
          title: function() {},
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
        axis: 'y',
        // label: 'Data',
        data: d(),
        backgroundColor: [
          '#129CFF',
          '#0C6DB3',
          '#FF6384',
          '#00FFFF',
        ],
      },    
    ]
  };

  return (
    <Bar data={data} options={options} />
  );
}

export default HisCt;
