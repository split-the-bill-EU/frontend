import React from 'react';


export default function SplitBillsCard ({feature}) {
    return (
        <div>
            <p>{feature.title}</p>
            <p>{feature.amount}</p>
            <p>{feature.status}</p>
            <button>Split</button>
        </div>
    );
}