import React, { use } from 'react';
import P3 from './P3';
import Card from '../Card/Card';

const P2 = ({f}) => {
    
    const pp = use(f);
    const p = pp.pricingOptions;

    return (
        <div>
            <h2 className='text-4xl text-center my-2'>Get our Membership</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {/* {
                    p.map(v => <P3 key={v.id} {...v}></P3>)
                } */}
                {
                    p.map(v => <Card key={v.id} {...v}></Card>)
                }
            </div>
        </div>
    );
};

export default P2;