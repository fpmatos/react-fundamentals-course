import React from 'react' 
import {Route} from 'react-router-dom'
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import App from './components/App';

export default () => {
    return <App>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
    </App>
}