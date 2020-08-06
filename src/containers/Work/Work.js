import React, { Component } from 'react';
import WorkEntry from '../../components/WorkEntry/WorkEntry'
import axios from '../../axios';
import Header from '../Layout/Header/Header';
import Aux from '../../hoc/Aux';

class Work extends Component {
    state = {
        works: null,
        error: false,
    }

    componentDidMount() {
        axios.get('Works.json')
            .then(response => {
                this.setState({
                    works: response.data
                });
            })
            .catch(error => {
                this.setState({ error: true })
            })
    }
    render() {
        console.log(this.state.works)

        let workList = null

        if (this.state.works) {
            workList = Object.keys(this.state.works).map((elem, index) => {
                return (<WorkEntry
                    key={index}
                    name={elem}
                    github={this.state.works[elem]['github']}
                    link={this.state.works[elem]['link']}
                />)

            })
        }
        return (
            <Aux>
                <Header title='Work' subtitle='Check some of my work'></Header>
                {workList}
            </Aux>)
    }
}
export default Work;