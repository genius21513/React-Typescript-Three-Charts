import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top' as const,
        // display: false,
      },
      // title: {
      //   display: true,
      //   text: 'Chart.js Bar Chart',
      // },
    },
    borderColor: '#ffffff',
    borderWidth: 1,
    scales: {
      x: {
        // type: "linear",
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        }
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false
        }
      },
    }
};

const data = {
    labels: ['1', '2', '3', '4'],
    datasets: [
      {
        data: [12, 19, 3, 5],
        backgroundColor: [
          '#82d3e5',
          '#fd635c',
          '#028254',
          '#feb543',
        ],
        // borderColor: [
        //   '#ffffff'
        // ],
        // borderWidth: 1,
      },
    ],
};
  


function HisCt() {
    return (
        <Bar options={options} data={data} />
    );
}

export default HisCt;
