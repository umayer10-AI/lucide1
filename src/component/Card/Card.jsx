import React from 'react';
import C1 from './C1';

const Card = ({name,features,popular}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
          <div className="card-body">
            {popular && <span className="badge badge-xs badge-warning">Most Popular</span>}
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">{name}</h2>
              <span className="text-xl">$29/mo</span>
            </div>
            <ul className="mt-6 flex flex-1 flex-col gap-2 text-xs">
              {
                features.map((v,i) => <C1 key={i} n={v}></C1>)
              }
              
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block">Subscribe</button>
            </div>
          </div>
      </div>
    );
};

export default Card;