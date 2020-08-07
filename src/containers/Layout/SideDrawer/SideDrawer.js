import React from 'react';
import NavElements from './NavElements/NavElements';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => (
    <div className={classes.SideDrawer}>
        <h3>Titulo</h3>
        <NavElements />
        <h2>Api para correo?</h2>
    </div>
)

export default sideDrawer;