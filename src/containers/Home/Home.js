import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import SocialMediaLinks from './SocialMediaLinks/SocialMediaLinks';

class Home extends Component {

    render() {
        return (
            <Aux>
                <h1>Alexis Fabian Ruiz García</h1>
                <h3>Computer science undergraduate student, programming enthusiast</h3>
                <SocialMediaLinks />
            </Aux>)
    }
}

export default Home;