import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const M1 = ({m}) => {

    const pp = use(m);
    const p = pp.data;
    // console.log(p)

    const g = p.map(v => {
        const student = {
            id: v.id,
            name: v.name,
            physics: v.marks.physics,
            chemistry: v.marks.chemistry,
            math: v.marks.math,
        }

        const avg = (student.physics + student.chemistry + student.math)/3;
        student.avg = avg;

        return student
    })
    console.log(g)

    return (
        <div>
            <BarChart width={500} height={300} data={g}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='yellow'></Bar>
                <Bar dataKey="physics" fill='green'></Bar>
            </BarChart>
        </div>
    );
};

export default M1;