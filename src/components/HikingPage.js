import React from 'react';
import { hikingList } from './HikingList';
import { useParams } from 'react-router-dom';

export default function HikingPage( {hikingList} ) {
    let {hikeId} = useParams()
    hikeId = parseInt(hikeId)

    const hike = hikingList.find(h => h.id === hikeId)

if (!hike) {
    return <h2>Hike Not Found</h2>
}

    return (
        <div>
            <h3> {hike.name} </h3>
            <p> {hike.location} </p>
            <p> {hike.rating} </p>
        </div>
    )
};