import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Header.module.css';

const header = (props) => {
    return (<Aux>
        <h1 style={{
            fontFamily: "Libre Baskerville"

        }}>{props.title}</h1>
        <h3 style={{
            fontFamily: "Montserrat"
        }}>{props.subtitle}</h3>
    </Aux >
    )
}
export default header