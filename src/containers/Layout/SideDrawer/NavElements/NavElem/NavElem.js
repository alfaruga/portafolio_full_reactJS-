import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavElem.module.css';

const navElem = (props) => {

    return (
        <li><NavLink className={classes.Navlink}
            activeClassName={classes.selected}
            to={{
                pathname: props.link
            }
            }>{props.link.split('_').join(' ')}</NavLink></li>
    )
}

export default navElem;