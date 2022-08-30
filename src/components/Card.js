import React from 'react';

function Card({ email, name, id }) {

    return (
        <div className='card'>
            <img className='profilepic' alt={`${name}'s AVI`} src={`https://robohash.org/${id}x?150x150`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;