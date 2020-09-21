import React, { Component } from 'react';
//import axios from '../../../axios';
import SocialMediaLink from '../SocialMediaLinks/SocialMediaLink/SocialMediaLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './SocialMediaLinks.module.css';

class SocialMediaLinks extends Component {
    state = {
        socialMediaLinks: {
            "Github": "https://github.com/alfaruga",
            "Linkedin": "https://mx.linkedin.com/",
            "Twitter": "https://twitter.com/alexis1525473"
        },
        fontAwesomeCodes: {
            "Github": "fab,github",
            "Linkedin": "fab,linkedin",
            "Twitter": "fab,twitter"
        },
        error: false,
    }
    /*
        Esto es overkill, pero lo dejo como referencia para referencia futura, 
        es una solicitud al servidor
        componentDidMount() {
            axios.get('Social-media-links.json')
                .then(response => {
                    this.setState({
                        socialMediaLinks: response.data
                    })
                })
                .catch(error => {
                    this.setState({ error: true })
                })
            axios.get('Font-awesome-codes.json')
                .then(response => {
                    this.setState({
                        fontAwesomeCodes: response.data
                    })
                })
                .catch(error => {
                    this.setState({ error: true })
                })
        }
        */
    render() {
        let socialLinks = null;
        if (this.state.socialMediaLinks && this.state.fontAwesomeCodes) {
            socialLinks =
                Object.keys(this.state.socialMediaLinks).map((element, index) => {
                    return (<SocialMediaLink
                        key={'sm' + index}
                        link={this.state.socialMediaLinks[element]}>
                        <FontAwesomeIcon className={classes.Icon} icon={[this.state.fontAwesomeCodes[element].split(',')[0], this.state.fontAwesomeCodes[element].split(',')[1]]} />
                    </SocialMediaLink>)
                })
        }
        return (socialLinks)
    }
}

export default SocialMediaLinks;