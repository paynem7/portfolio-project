import React from 'react'
import { hikingList } from './HikingList'

function HikingCard(props) {
    return (
        <div className="bg-light border p-4 m-2">
            <h4>{props.hike.name}</h4>
            <p>{props.hike.rating}</p>
            <p>{props.hike.location}</p>
        </div>
    )
}

export default HikingCard;
