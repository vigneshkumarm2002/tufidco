import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const ChartComponent = () => {
  const [chartData, setChartData] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('January');

  useEffect(() => {
    if (selectedMonth !== '') {
      fetch(`https://caring-brainy-hubcap.glitch.me/api/chart-data?month=${selectedMonth}`)
        .then(response => response.json())
        .then(data => {
          const userDataSet = {
            label: 'User Dataset',
            data: data.userChartData.datasets[0].data,
            borderColor: '#9BDD7C',
          };

          const guestDataSet = {
            label: 'Guest Dataset',
            data: data.guestChartData.datasets[0].data,
            borderColor: '#E9A0A0',
          };

          const newChartData = {
            labels: ['', 'week1', 'week2', 'week3', 'week4', ''],
            datasets: [userDataSet, guestDataSet],
          };

          setChartData(newChartData);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, [selectedMonth]);

  

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: false,
        grid: {
          display: false, // Hide vertical gridlines
        },
        ticks: {
          font: {
            family: "Lato", 
            weight: 400, 
            size: 14, 
          },
        },
      },
      y: {
        
        beginAtZero: true,
        grid: {
          display: true,
        },
        border: {
          display: false,
        },
        ticks: {
          stepSize: 100, // Set the step size between ticks
          max: 500, // Set the maximum value of the y-axis
          font: {
            family: "Lato", 
            weight: 400, 
            size: 14, 
          },
          padding: 10,
          
        },
      },
    },
    
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0, // Set the radius of the plot dots to 0 to remove them
      },
      line: {
        tension: 0.3, 
        borderWidth: 3,// Controls the curve of the line
      },
    },
  };
  const mediaQuery = window.matchMedia("(max-width: 500px)");
  if (mediaQuery.matches) {
    chartOptions.scales.x.ticks.font.size = 10;
    chartOptions.scales.y.ticks.font.size = 10;
    chartOptions.elements.line.borderWidth = 2;
  }
  return (
    <div className='chartContainer'>
    <h3>Activities</h3>
    <div className='actIndicators'>
      <select value={selectedMonth} onChange={handleMonthChange}   >
        <option value="January">January-February 2021</option>
        <option value="February">February-March 2021</option>
        <option value="March">March-April 2021</option>
        <option value="April">April-May 2021</option>
        <option value="May">May-June 2021</option>
      </select>
      <div className='userIndicator'>
        <div className='alignInd'>
          <div style={{backgroundColor:"#E9A0A0"}} className='dot'></div>
        <p>Guest</p>
        </div>
        <div className='alignInd'>
          <div style={{backgroundColor:"#9BDD7C"}}  className='dot'></div>
        <p>User</p>
        </div>
        
      </div>
    </div>
    <div className='lineChart'>
    {chartData && <Line  data={chartData} options={chartOptions} />}
    </div>
    {/* <div style={{ height: "100%"}}>
      {chartData && <Line data={chartData} options={chartOptions} />}
    </div> */}
    </div>
  );
};

export default ChartComponent;
