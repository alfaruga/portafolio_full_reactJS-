import React, { Component } from 'react';
import axios from '../../../axios';
import SocialMediaLink from '../SocialMediaLinks/SocialMediaLink/SocialMediaLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SocialMediaLinks extends Component {
    state = {
        socialMediaLinks: null,
        fontAwesomeCodes: null,
        error: false,
    }

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
    render() {
        let socialLinks = null;
        if (this.state.socialMediaLinks && this.state.fontAwesomeCodes) {
            socialLinks =
                Object.keys(this.state.socialMediaLinks).map((element, index) => {
                    console.log(this.state.fontAwesomeCodes[element]);
                    return (<SocialMediaLink
                        key={'sm' + index}
                        link={this.state.socialMediaLinks[element]}>
                        <FontAwesomeIcon icon={[this.state.fontAwesomeCodes[element].split(',')[0], this.state.fontAwesomeCodes[element].split(',')[1]]} />
                    </SocialMediaLink>)
                })
        }
        return (socialLinks)
    }
}

export default SocialMediaLinks;