import React from 'react';

import './app-header.css';

const AppHeader = ({numberPosts, numberLiked}) => {
    return (
        <div className='app-header d-flex'>
            <h1>Marina Chichel</h1>
            <h2>{numberPosts} items, liked {numberLiked}</h2>
        </div>
    );
};

export default AppHeader;