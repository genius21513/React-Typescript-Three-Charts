import { Bar } from 'react-chartjs-2';
import dataJson from '../api/data.json';

function HBarCt() {
  const l = dataJson.names;

  const d = () => {
    const ra : Array<number> = dataJson.unique_holders;
    return ra;
  }

  const options : any = {    
    scales: {
      x: {        
        grid: {
          color: '#64748b',
          borderColor: "#e2e8f0",
        }        
      },
      y: {        
        grid: {
          drawBorder: false,
          display: false
        }
      },
    },
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },    
      datalabels: {
        formatter: function (v : number, c : any) {        
          return v;
        },
        display: true,
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
    borderWidth: 0,
    hoverOffset: 5,
    offset: 2,
  };


  const data = {
    labels: l,
    datasets: [
      {
        axis: 'y',
        label: 'Horizontal Bar',
        data: d(),
        backgroundColor: [
          "#0284c7",
          "#0369a1",
          "#075985",
          "#0c4a6e",
        ],
      },
    ]
  };

  return (
    <>
      <Bar data={data} options={options} />      
    </>
  );
}

export default HBarCt;
