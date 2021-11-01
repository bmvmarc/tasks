import React, { Component } from 'react';

import './post-status-filter.css';


export default class PostStatusFilter extends Component {

    render() {

        const btns = this.props.btns.map( ({name, label}) => {
            const classes = (name === this.props.filter) ? 'btn btn-info' : 'btn btn-outline-secondary';
            return <button 
                        key={name}
                        type='button' 
                        className={classes}
                        onClick={() => this.props.onFilterChange(name)}>
                            {label}
                    </button>
            }
        );

        return (
            <div className='btn-group'>
                {btns}
            </div>
        );
    }
}
