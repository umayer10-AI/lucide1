import React from 'react';
import {Line, LineChart, XAxis, YAxis } from 'recharts';

const students = [
  { name: "Rahim", physics: 85, chemistry: 78, math: 90 },
  { name: "Karim", physics: 72, chemistry: 80, math: 75 },
  { name: "Sakib", physics: 88, chemistry: 92, math: 84 },
  { name: "Tamim", physics: 65, chemistry: 70, math: 68 },
  { name: "Mim", physics: 90, chemistry: 87, math: 93 },
  { name: "Nusrat", physics: 76, chemistry: 74, math: 81 },
  { name: "Hasan", physics: 69, chemistry: 73, math: 70 },
  { name: "Tania", physics: 82, chemistry: 79, math: 85 },
  { name: "Arif", physics: 91, chemistry: 88, math: 94 },
  { name: "Jannat", physics: 77, chemistry: 83, math: 80 }
];

const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={300} data={students}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey={"chemistry"} stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;