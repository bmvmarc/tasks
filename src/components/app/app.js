import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import nextId from "react-id-generator";

import './app.css';

const dataInit = [
    {id: 1, label: "I'm going to learn React!", important: true, liked: true},
    {id: 2, label: "I'm tired of learning React(", liked: false},
    {id: 3, label: "I wanna die...", important: false, liked: false}
];

export default class App extends Component{
    constructor (props) {
            super(props);
            this.state = {
                data: dataInit,
                term: '',
                filter: 'all'
            };
    }

    btnsFilter = [{name: 'all', label: '...All...'}, 
                  {name: 'liked', label: 'Liked*'}, 
                  {name: 'important', label: 'Important!'}];

    deletePost = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id);
            return {
                data: [...data.slice(0, index), ...data.slice(index + 1)]
            }
        })
    }

    searchPosts = (arr, term) => {
        return arr.filter(el => el.label.indexOf(term) > -1);
    }

    filterPosts = (arr, filter) => {
        switch (filter) {
            case 'liked':
                arr = arr.filter(el => el.liked);
                break;
            case 'important':
                arr = arr.filter(el => el.important);
                break;     
            default:
                break;     
        }
        return arr;
    }

    addPost = (txt) => {
        this.setState(({data}) => {
            const newId = nextId();
            return {
                data: [...data, {id: newId, label: txt, important: false, liked: false}]
            }
        })
     }    

    toggleLiked = (id) => {
        this.toggleProperty(id, 'liked');
    }

    toggleImportant = (id) => {
        this.toggleProperty(id, 'important');
    }    

    toggleProperty = (id, name) => {
        this.setState( ({data}) => {
                const newData = [...data];
                const index = newData.findIndex(el => el.id === id);
                newData[index][name] = !newData[index][name];

                return {
                    data: newData
                }
            }
        );
    }

    onTermInput = (txt) => {
        this.setState({
            term: txt
        });
    }

    onFilterChange = (txt) => {
        this.setState({
            filter: txt
        });
    }

    render() {

        const {data, term, filter} = this.state; 

        let posts = this.searchPosts(data, term);
        posts = this.filterPosts(posts, filter);


        const numberLiked = posts.filter(el => el.liked).length, 
              numberPosts = posts.length;

        return (
            <div className='app'>
                <AppHeader numberPosts={numberPosts} numberLiked={numberLiked}/>
                <div className='search-panel d-flex'>
                    <SearchPanel
                        onTermInput={txt => this.onTermInput(txt)}/>
                    <PostStatusFilter
                        btns={this.btnsFilter}
                        filter={filter}
                        onFilterChange={this.onFilterChange}/>                
                </div>
                <PostList 
                    posts={posts}
                    onDelete={ id => this.deletePost(id) }
                    onLike={ id => this.toggleLiked(id) }
                    onImportant={ id => this.toggleImportant(id) }
                />
                <PostAddForm onAdd={ label => this.addPost(label) }/>
            </div>
        );
    }
};

