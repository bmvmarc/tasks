import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import nextId from "react-id-generator";

import './app.css';

const dataInit = [
    {},
    {id: 1, label: "I'm going to learn React!", important: true, liked: true},
    {id: 2, label: "I'm tired of learning React(", liked: false},
    {id: 3, label: "I wanna die...", important: false, liked: false}
];

export default class App extends Component{
    constructor (props) {
            super(props);
            this.state = {
                data: dataInit
            };
            // this.maxId = 4;
    }

    deletePost = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id);
            return {
                data: [...data.slice(0, index), ...data.slice(index + 1)]
            }
        })
    }

    addPost = (txt) => {
        this.setState(({data}) => {

            const newId = nextId();

            return {
                data: [...data, {id: newId, label: txt + '  ' + newId, important: false, liked: false}]
            }
        })
     }    

    render() {
        return (
            <div className='app'>
                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>                
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={ id => this.deletePost(id) }/>
                <PostAddForm onAdd={ label => this.addPost(label) }/>
            </div>
        );
    }
};

