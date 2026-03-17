import React from 'react';
import P4 from './P4';

const P3 = ({name,price,description,features}) => {
    return (
        <div className='bg-amber-700 rounded-xl p-5 flex flex-col justify-center gap-3'>
            <div>
                <h2 className='text-3xl'>{name}</h2>
                <p className='text-2xl'>{price}</p>
            </div>
            <div className='bg-amber-500 rounded-xl p-3 flex-1'>
                <p className='text-xl'>{description}</p>
                {
                    features.map((v,i) => <P4 key={i} g={v}></P4>)
                }
            </div>
            <button className="btn w-full">Subscribe</button>
        </div>
    );
};

export default P3;