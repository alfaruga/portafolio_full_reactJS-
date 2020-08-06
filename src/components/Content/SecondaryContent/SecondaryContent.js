import React from 'react';
import Aux from '../../../hoc/Aux';

const secondaryContent = (props) => (<Aux>
    <h3>{props.secondary}</h3>
    <p>{props.subSecondary}</p>
</Aux>
)

export default secondaryContent;