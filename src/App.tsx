import './App.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, getElementsAtEvent } from 'react-chartjs-2';
import datadummy from './assets/data.json';
import { useEffect, useRef, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};
const labels = datadummy.map((day) => day?.day);
export const data = {
  labels,
  datasets: [
    {
      // label: 'Dataset 1',
      data: datadummy.map((amount) => amount.amount),
      backgroundColor: '#EC755D',
      borderRadius: 3,
      hoverBackgroundColor: '#76B5BC',
    },
  ],
};
function App() {
  return (
    <div className="w-full p-0 md:p-[80px]">
      <main className=" bg-[#F7E9DC] md:h-full  w-full rounded flex justify-center items-center">
        <div className="w-full md:w-[70%] lg:w-[40%] px-[1.5rem] py-[2rem] md:py-[100px]">
          <div className="bg-[#EC755D] shadow rounded-2xl overflow-hidden p-8 flex justify-between items-center">
            <div className="text-gray-200 font-semibold">
              <h1 className="opacity-80">My balance</h1>
              <h1 className="text-3xl">$927.23</h1>
            </div>
            <div>
              <img src="/images/logo.svg" alt="logo svg" />
            </div>
          </div>
          <div className="bg-[#FFFCF7] mt-6 rounded-2xl p-8 shadow">
            <h1 className="text-2xl md:text-3xl text-start font-semibold">Spending - Last 7 days</h1>
            <div className="h-[200px] border-b-[3px] border-[#AFAAA4]/30 my-6 pb-6">
              <Bar options={options} data={data} className="h-full" />
            </div>
            <div className="flex text-[#AFAAA4] text-lg md:text-xl justify-between font-[400] items-center">
              <div className="text-start">
                <h2>Total this month</h2>
                <h1 className="text-3xl md:text-5xl text-[#362416] font-bold">$478.92</h1>
              </div>
              <div className="text-end">
                <h3 className="font-bold text-[#362416]">+2.4%</h3>
                <p>from last month</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
