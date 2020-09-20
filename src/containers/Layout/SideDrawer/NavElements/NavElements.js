import React, { Component } from 'react';
import NavElem from './NavElem/NavElem';
import classes from './NavElements.module.css'
import { withRouter } from 'react-router-dom';
class NavElements extends Component {
    state = {
        pages: ['Home', 'About_me', 'My_work', 'Contact_me']
    }

    render() {
        let navLinks = this.state.pages.map((page, index) => {
            return (<NavElem
                key={index}
                link={page} />)
        })

        return (
            <nav className={classes.NavElements}>
                <ul>{navLinks}</ul>
            </nav>
        )
    }
}

export default withRouter(NavElements);