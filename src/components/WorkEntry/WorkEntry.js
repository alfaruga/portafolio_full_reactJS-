import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorkLink from './WorkLink/WorkLink';

const workEntry = (props) => {
    return (
        <div >
            <div>
                <img src="images/tictactoe.png" />{props.name}
            </div>
            <FontAwesomeIcon icon={['fab', 'github']} />
            <WorkLink name='Github' address={props.github} />
            <FontAwesomeIcon icon={['fas', 'eye']} />
            <WorkLink name='Project' address={props.link} />
        </div >)
}

export default workEntry;