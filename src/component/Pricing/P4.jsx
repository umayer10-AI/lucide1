import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const P4 = ({g}) => {
    console.log(g)
    return (
        <div>
            <p className='flex gap-2 mt-2'><CircleCheckBig className='text-green-500 font-bold'></CircleCheckBig> {g}</p>
        </div>
    );
};

export default P4;