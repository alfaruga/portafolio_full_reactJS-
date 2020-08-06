import React from 'react';
import classes from './Footer.module.css';

const footer = (props) => (
    props.show ? <footer className={classes.Footer}>
        <p>Alexis Fabian Ruiz García, Copyright &copy; 2020</p>
    </footer> : null
)
export default footer;