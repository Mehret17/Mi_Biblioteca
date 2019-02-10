import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router';
import { Layout } from '../components/Layout';
import Home from '../components/Home/Home';
import MyLibrary from '../components/MyLibrary/MyLibrary';
import WishList from '../components/Wishlist/WishList';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/mylibrary' component={MyLibrary} />
            <Route exact path='/wishlist' component={WishList} />
           </Layout>
    );
    }
}
