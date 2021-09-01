import React, { Component } from 'react';

import './post-list-item.css';

export default class PostListItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            important: props.important,
            liked: props.liked
        }
    }

    onImportant = () => {
        this.setState((state)=>({important: !state.important}))
    }

    onLike = () => {
        this.setState((state)=>({liked: !state.liked}))
    }

    render() {
        const {label, onDelete} = this.props;
        const {liked, important} = this.state;
        const classNames = "app-list-item d-flex justify-content-between" +
                            (important ? ' important' : '') + 
                            (liked ? ' like' : '');

        return (
            <div className={classNames}>
                <span 
                    onClick={this.onLike}
                    className="app-list-item-label">
                        {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        onClick={this.onImportant}
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
