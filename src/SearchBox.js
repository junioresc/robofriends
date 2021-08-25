import React from 'react';

function SearchBox({ searchfield, searchChange}) {
    return (
        <div className='searchbox'>
            <h1 className='title'>ROBOFRIENDS</h1>
            <input className='search' type='search' placeholder="Search for friends" onChange={searchChange} />
        </div>
    );
}

export default SearchBox;