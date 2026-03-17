import React from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

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

const R4 = () => {

    const t = students.length;
    const avgM = students.reduce((a,b) => a+b.math,0)/t;
    const avgP = students.reduce((a,b) => a+b.physics,0)/t;
    const avgC = students.reduce((a,b) => a+b.chemistry,0)/t;

    const colors = ["#ff4d4f", "#1890ff", "#52c41a"];

    const data = [
    { name: "Math", value: avgM },
    { name: "Physics", value: avgP },
    { name: "Chemistry", value: avgC }
  ];

    return (
        <div>
            <PieChart width={300} height={300}>
                <Pie data={data} dataKey={"value"} nameKey="name" outerRadius={120} label>
                    {
                        data.map((v,i) => <Cell key={i} fill={colors[i]}></Cell>)
                    }
                </Pie>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </PieChart>
        </div>
    );
};

export default R4;