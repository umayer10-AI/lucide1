import React, { Suspense } from 'react';
import P2 from './P2';

const fetchApi = async () => {
    const a = await fetch('pricing.json');
    return a.json();
}
const f = fetchApi();

const Pricing = () => {
    return (
        <div>
            <Suspense fallback={<h2>Loading...</h2>}>
                <P2 f={f}></P2>
            </Suspense>
        </div>
    );
};

export default Pricing;