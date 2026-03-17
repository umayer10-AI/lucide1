import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const M3 = ({a}) => {

    const pp = use(a);
    const p = pp.data;

    const mark = p.map(v => {
        const s ={
            id: v.id,
            name: v.name,
            physics: v.marks.physics,
            chemistry: v.marks.chemistry,
            math: v.marks.math,
        }
        const avg = (s.math + s.physics + s.chemistry) / 3;
        s.avg = avg;

        return s;
    })

    return (
        <div>
            <BarChart width={800} height={300} data={mark}>
                <XAxis dataKey={'name'} stroke='yellow'></XAxis>
                <YAxis stroke='yellow'></YAxis>
                <Bar dataKey={"avg"} fill='skyblue'></Bar>
                <Bar dataKey={"math"} fill='#eccc68'></Bar>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default M3;