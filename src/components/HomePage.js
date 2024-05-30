import React from 'react';
import { useState } from 'react';
import HikingCard from './HikingCard';
import { hikingList } from './HikingList';


export default function HomePage({ hikingList }) {
    const [hikingLocationFilter, setLocationFilter] = useState("Oregon")


    let filteredHikes 
    if (hikingLocationFilter === "All") {
      filteredHikes = hikingList
    } else {
      filteredHikes = hikingList.filter(hike => hike.location === hikingLocationFilter )
    }

    return (
        <div>
            <div>
                <button className='btn btn-primary me-2' onClick={() => setLocationFilter("All")}>All</button>
                <button className='btn btn-primary me-2' onClick={() => setLocationFilter("Oregon")}>Oregon</button>
                <button className='btn btn-primary me-2' onClick={() => setLocationFilter("Washington")}>Washington</button>
            </div>
            {filteredHikes.map(hike => <HikingCard hike={hike} />)}
        </div>
    )
};