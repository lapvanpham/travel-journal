import React from 'react';
import Navbar from "./components/Navbar";

import data from "./components/data.js";
import Card from "./components/Card";

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div className='container'>
            <Navbar/>
            {cards}
        </div>
    );
}