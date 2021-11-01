import React, { Component } from 'react';

import './post-list-item.css';

export default class PostListItem extends Component{
    render() {
        const {label, onDelete, onLike, onImportant, important, liked} = this.props;
        // const {liked, important} = this.state;
        const classNames = "app-list-item d-flex justify-content-between" +
                            (important ? ' important' : '') + 
                            (liked ? ' like' : '');

        return (
            <div className={classNames}>
                <span 
                    onClick={onLike}
                    className="app-list-item-label">
                        {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        onClick={onImportant}
                        type='button' 
                        className="btn-star btn-sm">
                            <i className="fa fa-star"></i>
                    </button>
                    <button 
                        onClick={onDelete}
                        type='button' 
                        className="btn-trash btn-sm">
                            <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>        
        );        
    }
}
