import React from 'react';
import { hikingList } from './HikingList';

export default function RandomPage({ hikingList }) {
    const randomHike = hikingList[ Math.floor(Math.random() * hikingList.length)]
     return (
        <div>
            <h5>You should Hike....</h5>
            <h2 className='display-1'>{randomHike.name}</h2>
        </div>
    )
}