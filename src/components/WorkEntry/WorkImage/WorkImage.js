import React, { Component } from 'react';
import axios from '../../../axios';
import classes from './WorkImage.module.css';

const workImage = (props) =>
    <img className={classes.Image} src={props.src}
        alt={props.alt}>
    </img>

export default workImage