import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

    onInput = (e) => {
        this.props.onTermInput(e.target.value);
    }

    render (){
        return (
            <input 
                className='form-control search-input'
                type='text'
                placeholder='Search'
                onInput={this.onInput}
            />
    )
    }

}

