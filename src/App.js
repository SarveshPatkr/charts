import React, { useState, useEffect } from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import './App.css';

function App() {
  const COLOR = 'rgba(134, 134, 134, 1)';
  return (
    <div className="App">
      <Bar data={
        {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: 'red',
              borderRadius: 10,
              data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
              label: 'My Second dataset',
              backgroundColor: 'blue',
              data: [28, 48, 40, 19, 86, 27, 90]
            }
          ]
        }
      }
        options={
          {
            title: {
              display: true,
              text: 'Something',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            },
            maintainAspectRatio: false,
            responsive: true,
            aspectRatio: 1,
            color: COLOR,

            scales: {
              yAxes: [
                {
                  stacked: true,
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  stacked: true,
                },
              ],
            }
          }
        } height={"100%"} />
        <hr/>


      <Line data={{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Profit',
          data: [12, 19, 3, 5, 2, 3], 
          fill: true, // Tells the chart to fill up the area under the line
          backgroundColor: 'rgba(0, 255, 21, 0.5)',
          borderColor: 'rgba(0, 255, 21, 1)',
        },
        {
          label: 'Lose',
          data: [5, 27, 27, 9, 10, 7], 
          fill: true, // Tells the chart to fill up the area under the line
          backgroundColor: 'rgba(255, 44, 44, 0.5)',
          borderColor: 'rgba(255, 44, 44, 1)',
        },],
      }}
        options={{
          color: COLOR,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
            },],
          },
        }} />
<hr/>


      <Doughnut data={{
        labels: ['Shirt', 'Pants', 'Books', 'E-Books', 'Bible', 'Cocaine'],
        datasets: [
          {
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
          },
        ],
      }} 
      options={{
        color: COLOR,
      }}/>
      <hr/>
    </div>
  );
}

export default App;
