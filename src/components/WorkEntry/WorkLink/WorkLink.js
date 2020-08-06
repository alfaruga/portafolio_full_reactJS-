import React from 'react';
import { Link } from 'react-router-dom';

const workLink = (props) => (
    <a href={props.address}>{props.name}</a>
)

export default workLink;