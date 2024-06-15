'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart: React.FC<DoughnutChartProps> = ({ accounts }) => {
  const data = {
    labels: ['Bank A', 'Bank B', 'Bank C'],
    datasets: [
      {
        label: 'Banks',
        data: [1250, 2500, 3750],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    cutout: '60%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
