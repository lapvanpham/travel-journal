import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
            <img src={`${props.item.imageUrl}`} alt='MOUNT FUJI'/>
            <div className='contents'>
                <div className = 'location'>
                    <i className="location__map-marker fas fa-map-marker-alt"></i>
                    <span className='location-country'>{props.item.location}</span>
                    <a className='location-url' href={`${props.item.googleMapsUrl}`}>View on Google Map</a>
                </div>

                <h1  className='card-title'>{props.item.title}</h1>
                <p className = 'card-date'>{`${props.item.startDate} - ${props.item.endDate}`}</p>
                <p className='card-description'>{props.item.description}</p>
            </div>
        </div>
    );
}