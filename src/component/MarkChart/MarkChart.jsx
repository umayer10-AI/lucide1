import React, { Suspense } from 'react';
import M1 from './M1';
import axios from 'axios'

const m = axios.get("marks.json");

const MarkChart = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <M1 m={m}></M1>
            </Suspense>
        </div>
    );
};

export default MarkChart;