import React from 'react';
import classes from './WorkLink.module.css';

const workLink = (props) => (
    <a className={classes.Link} href={props.address}>{props.name}</a>
)

export default workLink;