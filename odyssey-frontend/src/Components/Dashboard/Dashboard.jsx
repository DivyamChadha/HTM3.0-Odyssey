import React from 'react'
import './Dashboard.css'
import { useState } from 'react';
import Graph from '../Graph/Graph';
import Filter from '../Filter/Filter';


const Dashboard = () => {

    const [activeFilters, setActiveFilters] = useState(["Hello"]);

    const removeFilter = ()=>{
        setActiveFilters(...activeFilters);
    }

    return ( 
        <>
        <Filter/>
        {/* <Graph/> */}
        </>
    
    )
}

export default Dashboard