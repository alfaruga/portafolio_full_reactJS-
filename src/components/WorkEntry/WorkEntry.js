import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorkLink from './WorkLink/WorkLink';
import { Calculator, DrumKit, Library, Product, Tictactoe } from '../../assets/images/index'

const workEntry = (props) => {
    let imagesArr = [Calculator, DrumKit, Library, Product, Tictactoe]
    return (
        < div >

            <div>
                <img alt={props.name} src={imagesArr[props.imageRef]} />{props.name}
            </div>
            <FontAwesomeIcon icon={['fab', 'github']} />
            <WorkLink name='Github' address={props.github} />
            <FontAwesomeIcon icon={['fas', 'eye']} />
            <WorkLink name='Project' address={props.link} />
        </div >)
}

export default workEntry;