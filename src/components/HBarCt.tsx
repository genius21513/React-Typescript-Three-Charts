import React from 'react';
import { Bar } from 'react-chartjs-2';

// import type { ChartData, ChartOptions } from 'chart.js';

// interface BarProps {
//   options: ChartOptions<'bar'>;
//   data: ChartData<'bar'>;
// }

var dataJson = require('../api/data.json');


function HBarCt() {
  const l = dataJson.names;

  const d = () => {
    let ra : Array<number> = dataJson.unique_holders;
    return ra;
  }

  const options : any = {
    // layout: {
    //   padding: 2
    // },
    scales: {
      x: {       
        // ticks: {
        //   display: false,
        // },
        grid: {
          drawBorder: false,
          display: false,
        }
      },
      y: {
        // ticks: {
        //   display: false,
        // },
        grid: {
          drawBorder: false,
          display: false
        }
      },
    },
    indexAxis: 'y',
    // animations: {
    //   startAngle: {
    //     from: Math.PI * 2,
    //   },
    //   endAngle: {
    //     from: Math.PI * 2,
    //   }
    // },
    
    plugins: {
      legend: {
        display: false,
      },    
      datalabels: {
        formatter: function (v : number, c : any) {        
          return v;
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
            return context.label + ' : ' + context.formattedValue;
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

export default HBarCt;
