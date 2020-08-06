import React, { Component } from 'react';
import WorkEntry from '../../components/WorkEntry/WorkEntry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../../axios';
import Header from '../Layout/Header/Header';
import Aux from '../../hoc/Aux';
import classes from './Work.module.css'
import Footer from '../Layout/Footer/Footer';
class Work extends Component {
    state = {
        works: null,
        error: false,
        workIndex: 0,
        workLength: null,
        showFooter: true,
    }

    componentDidMount() {
        axios.get('Works.json')
            .then(response => {
                this.setState({
                    works: response.data,
                    workLength: Object.keys(response.data).length
                });
            })
            .catch(error => {
                this.setState({ error: true })
            })
    };
    nextHandler = () => {
        if (this.state.workIndex < this.state.workLength - 1) {
            this.setState((prevState) => {
                return { workIndex: prevState.workIndex + 1 }
            })
        } else {
            this.setState({ workIndex: 0 })
        }
    }
    prevHandler = () => {
        if (this.state.workIndex > 0) {
            this.setState((prevState) => {
                return { workIndex: prevState.workIndex - 1 }
            })
        } else {
            this.setState({ workIndex: this.state.workLength - 1 })
        }
    }
    render() {

        let workList = null

        if (this.state.works) {
            workList = Object.keys(this.state.works).map((elem, index) => {
                return (<WorkEntry
                    key={index}
                    imageRef={index}
                    name={elem}
                    github={this.state.works[elem]['github']}
                    link={this.state.works[elem]['link']}
                />)

            })
        }

        return (
            <Aux>
                <div className={classes.Work}>
                    <Header title='Work' subtitle='Check some of my work'></Header>
                    <div className={classes.ProjectShowcase}>
                        <button onClick={this.prevHandler}><FontAwesomeIcon icon={['fas', 'arrow-circle-left']} /></button>
                        {workList ? workList[this.state.workIndex] : null}
                        <button onClick={this.nextHandler}><FontAwesomeIcon icon={['fas', 'arrow-circle-right']} /></button>
                    </div>
                </div>
                <Footer show={this.state.showFooter} />
            </Aux>)
    }
}
export default Work;