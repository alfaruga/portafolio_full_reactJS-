import React from 'react';
import Aux from '../../../hoc/Aux';

const mainContent = (props) => (<Aux>
    <h3>{props.main}</h3>
    <p>{props.submain}</p>
</Aux>
)

export default mainContent;