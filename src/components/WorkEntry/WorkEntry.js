import React from 'react';
import classes from './WorkEntry.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aux from '../../hoc/Aux';
import WorkLink from './WorkLink/WorkLink';
import WorkImage from './WorkImage/WorkImage';
import { Calculator, DrumKit, Library, Product, Tictactoe } from '../../assets/images/index'

const workEntry = (props) => {
    let imagesArr = [Calculator, DrumKit, Library, Product, Tictactoe];
    return (
        < Aux >
            <div className={classes.Container}>
                <WorkImage alt={props.name} src={imagesArr[props.imageRef]} />
                <div className={classes.Description}>
                    <p>{props.name}</p><br></br>
                    <span>
                        <FontAwesomeIcon icon={['fab', 'github']} />
                        <WorkLink name='Github' address={props.github} />
                    </span>
                    <span>
                        <FontAwesomeIcon icon={['fas', 'eye']} />
                        <WorkLink name='Project' address={props.link} />
                    </span>
                </div>
            </div>

        </Aux >)
}

export default workEntry;