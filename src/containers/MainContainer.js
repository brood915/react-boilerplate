import "babel-polyfill";
import React from 'react';
import PropTypes from 'prop-types';        
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import Leagues from './Leagues';
import Players from './Players';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


class MainContainer extends React.Component {

render() {
  return(<div id="main">
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/leagues" component={Leagues}/>
        <Route path="/players" component={Players}/>
        <Footer />
    </div>);
}
}
        
export default connect()(MainContainer);
