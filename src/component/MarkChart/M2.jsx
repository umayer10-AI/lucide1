import axios from 'axios';
import React, { Suspense } from 'react';
import M3 from './M3';

const a = axios.get('marks.json');

const M2 = () => {
    return (
        <div>
            <Suspense fallback={<h1>Loading......</h1>}>
                <M3 a={a}></M3>
            </Suspense>
        </div>
    );
};

export default M2;