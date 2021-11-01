import React, { Component } from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onInput = (e)=> {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit = (e) => {
        const text = this.state.text;
        e.preventDefault();
        if (text) {
            this.props.onAdd(text)
            this.setState({
                text: ''
            })
        }
    }

    render() {    
        return (
            <form 
                className='bottom-panel d-flex'
                onSubmit={this.onSubmit}>
                    <input 
                        type='text'
                        placeholder='What are you thinking about?'
                        className='form-control new-post-label'
                        onInput={this.onInput}
                        value={this.state.text}
                    />
                    <button
                        type='submit'
                        className='btn btn-outline-secondary'>
                        Add
                    </button>
            </form>
        );
    }

}

