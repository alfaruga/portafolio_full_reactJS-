import React from 'react';
import { NavLink } from 'react-router-dom';

const navElem = (props) => (
    <NavLink to={{
        pathname: props.link
    }}>{props.link}</NavLink>
)

export default navElem;