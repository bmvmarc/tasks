import React from 'react';
import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({posts, onDelete, onLike, onImportant}) => {

    const elements = posts
                    .filter((item) => item === Object(item) && Object.keys(item).length > 0)
                    .map((item) => {
                        const {id, ...itemProps} = item;
                        return (
                            <li key={id} className="list-group-item">
                                <PostListItem 
                                    {...itemProps}
                                    onDelete={() => onDelete(id)}
                                    onLike={() => onLike(id)} 
                                    onImportant={() => onImportant(id)} 
                                />
                            </li>
                        )
                    });

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    );
}

export default PostList;