import React,{useState} from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale, LinearScale } from "chart.js";

Chart.register(CategoryScale, LinearScale);

const ChartComponent = () => {

  const [showDownload, setShowDownload] = useState(false);

  const handleDownloadToggle = () => {
    setShowDownload(!showDownload);
  };

  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Project Wise Phase",
        data: [50, 45, 60, 50, 60, 60, 40, 60, 100, 50, 90, 100],
        backgroundColor: "#79F5E7",
      },
      {
        label: "Amount",
        data: [80, 75, 70, 85, 90, 45, 80, 90, 110, 35, 110, 125],
        backgroundColor: "#1B8381",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category",
        labels: chartData.labels,
        beginAtZero: false,
        grid: {
          display: false, // Hide vertical gridlines
        },
        ticks: {
          font: {
            family: 'Lato',
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
        // title: {
        //   display: true,
        //   text: 'Amount ( Lakhs )', // Set the Y-axis title with 'laks'
        //   font: {
        //     family: 'Lato',
        //     weight: 400,
        //     size: 14,
        //   },
        //   padding: { bottom: 15 },
        // },
        border: {
          display: false,
        },
        ticks: {
          stepSize: 40, // Set the step size between ticks
          font: {
            family: 'Lato',
            weight: 400,
            size: 14,
          },
          padding: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top', // You can change the position as needed
        labels: {
          boxWidth: 12, // Set the width of the legend color box
          font: {
            size: 12, // Set the font size for the legend
          },
        },
        layout: {
          padding: {
            bottom:10, // Add top padding to create a gap between the legend and the chart
          },
        },
      },
    }
  };
  
  

  // const chartOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   scales: {
  //     x: {
  //       beginAtZero: false,
  //       grid: {
  //         display: false, // Hide vertical gridlines
  //       },
  //       ticks: {
  //         font: {
  //           family: 'Lato',
  //           weight: 400,
  //           size: 14,
  //         },
  //       },
  //     },
  //     y: {
  //       beginAtZero: true,
  //       grid: {
  //         display: true,
  //       },
  //       border: {
  //         display: false,
  //       },
  //       ticks: {
  //         stepSize: 20, // Set the step size between ticks
  //         max: 500, // Set the maximum value of the y-axis
  //         font: {
  //           family: 'Lato',
  //           weight: 400,
  //           size: 14,
  //         },
  //         padding: 10,
  //       },
  //     },
  //   },
  //   plugins: {
  //     tooltip: {
  //       enabled: false,
  //     },
  //     legend: {
  //       display: false,
  //     },
  //   },
  //   elements: {
  //     point: {
  //       radius: 0, // Set the radius of the plot dots to 0 to remove them
  //     },
  //     line: {
  //       tension: 0.3,
  //       borderWidth: 3, // Controls the curve of the line
  //     },
  //   },
  // };

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia('(max-width: 500px)');
  //   if (mediaQuery.matches) {
  //     chartOptions.scales.x.ticks.font.size = 10;
  //     chartOptions.scales.y.ticks.font.size = 10;
  //     chartOptions.elements.line.borderWidth = 2;
  //   }
  // }, []);

  return (
    <div className="chartContainer">
      <div className="chartHead">
      <h3>District</h3>
      <span className="material-symbols-rounded download" onClick={handleDownloadToggle}>download</span>

      {showDownload && (
            <div className="download_dropdown">
       
                <li>Download SVG</li>
                <li>Download PNG</li>
                
                <li>Download CSV</li>
            
            </div>
          )}

      </div>

      <div className="barChart">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ChartComponent;
