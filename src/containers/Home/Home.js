import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import SocialMediaLinks from './SocialMediaLinks/SocialMediaLinks';
import classes from './Home.module.css';

class Home extends Component {

    render() {
        return (
            <Aux>
                <div className={classes.Home}>
                    <div className={classes.MyName}>
                        <h1>Alexis Fabian Ruiz García</h1>
                        <h3>Computer science undergraduate student, programming enthusiast</h3>
                        <div><SocialMediaLinks /></div>
                    </div>
                </div>
            </Aux >)
    }
}

export default Home;