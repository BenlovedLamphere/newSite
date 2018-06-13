import React, {Component} from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import getRouter from 'router/router';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {getRouter()}
                <Footer/>
            </div>
        )
    }
}