import React, { Component } from 'react';
import Home from './home/HomePage.js';
import People from './people/PeoplePage.js';
import Things from './things/ThingsPage.js';
import Nav from './Nav.js';

import Store from '../store.js';
const store = new Store();


export default class App extends Component{
  constructor(){
    super();
    this.state = { things: [], people: [] };
  }
  componentDidMount(){
    const setPage = ()=> {
      const page = window.location.hash ? window.location.hash.slice(1) : 'home';
      this.setState({ page: page });
    };
    window.addEventListener('hashchange', setPage.bind(this));
    setPage();
    store.subscribe( (data) =>  this.setState( data) );
    store.load();
  }
  render(){
    let currentPage;
    switch(this.state.page){
      case 'people':
        currentPage = <People  people = { this.state.people }/>;
        break;
      case 'things':
        currentPage = <Things  onCreate={ store.createThing.bind(store) } things = { this.state.things } onDestroy={ store.destroyThing.bind(store)} />;
        break;
      default:
        currentPage = <Home />;
        break;
    }
    return (
        <div className='container'>
          <Nav page={ this.state.page }/>
          <div style={{ marginTop: '10px' }}>
            { currentPage }
          </div>
        </div>
    );
  }
}
