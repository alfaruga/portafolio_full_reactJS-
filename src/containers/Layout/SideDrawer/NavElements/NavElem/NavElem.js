import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavElem.module.css';

const navElem = (props) => (
    <li><NavLink className={classes.Navlink} activeClassName={classes.selected} to={
        props.link
    }>{props.link.split('_').join(' ')}</NavLink></li>
)

export default navElem;