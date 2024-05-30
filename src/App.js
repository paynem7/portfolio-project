import HikingCard from "./components/HikingCard"
import HikingPage from "./components/HikingPage";
import React from 'react'
import { useState } from 'react';
import HomePage from "./components/HomePage";
import { hikingList } from "./components/HikingList";
import RandomPage from "./components/RandomPage";
import { Link,Route, Routes } from "react-router-dom";

function App() {
  const [hikes, setHikingList] = useState( hikingList )

  return (
    <div>
      <h1>Payne's Hiking App</h1>
      <Link to="/" className='btn-link me-3'>Home</Link>
      <Link to="/random" className='btn-link'>Random Hike</Link>
      <br/>
      <Routes>
        <Route path="/" element={ <HomePage hikingList={hikingList} /> } />
        <Route path="/random" element={ <RandomPage hikingList={hikingList} /> } />
        <Route path='/hike/:hikeId' element={ <HikingPage hikingList={hikingList} /> } />
      </Routes>
    </div>
  );
}

export default App;
