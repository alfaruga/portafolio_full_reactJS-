import React from 'react';
import classes from './WorkImage.module.css';

const workImage = (props) =>
    <img className={classes.Image} src={props.src}
        alt={props.alt}>
    </img>

export default workImage