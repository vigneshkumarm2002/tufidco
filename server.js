const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Define an API endpoint
app.get('/api/chart-data', (req, res) => {
  // Get the requested month from query parameters
  const requestedMonth = req.query.month;

  // Generate chart data for users based on the requested month
  const userChartData = generateChartData(requestedMonth, 'user');

  // Generate chart data for guests based on the requested month
  const guestChartData = generateChartData(requestedMonth, 'guest');

  res.json({
    userChartData,
    guestChartData
  });
});

// Start the server
const port = 5001;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});

// Helper function to generate chart data for different months and user types
function generateChartData(month, userType) {
  const monthsData = {
    January: {
      user: [100, 150, 300, 200, 450],
      guest: [150, 100, 180, 300, 450]
    },
    February: {
      user: [200, 100, 350, 250, 400],
      guest: [150,250,300,250,400]
    },
    March: {
      user: [150,350,168,451,267],
      guest: [,250,456,253,156,241]
    },
    April: {
      user: [,320,456,152,351,423],
      guest: [350,123,456,250,360]
    },
    May: {
      user: [260,124,350,456,460],
      guest: [150,360,450,123,450]
    }
  };

  const monthData = monthsData[month];

  // Return default data if the requested month or user type is not found
  if (!monthData || !monthData[userType]) {
    return {
      labels: [],
      datasets: []
    };
  }

  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: `${userType.charAt(0).toUpperCase()}${userType.slice(1)} People Count`,
        data: monthData[userType]
      }
    ]
  };

  return chartData;
}
