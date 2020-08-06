import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Header.module.css';

const header = (props) => {
    return (<Aux >
        <div className={classes.Header}>
            <h1 >{props.title}</h1>
            <h3 >{props.subtitle}</h3>
        </div>
    </Aux >
    )
}
export default header