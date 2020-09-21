import React from 'react';
import Header from '../Layout/Header/Header';
import Aux from '../../hoc/Aux';
import { PorfilePic } from '../../assets/images/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './About.module.css'

const about = (props) => {
    const FontAwesomeCodes = []
    return (
        <Aux>
            <div className={classes.About}>
                <img className={classes.Image} src={PorfilePic} alt={"Profile"}></img>
                <div className={classes.Info}>
                    <Header title='About me' subtitle='Hola, me llamo Alexis Ruiz, soy un desarrollador de webapps novato.
            Disfruto aprender sobre temas relacionados con programación y tecnología. Actualmente estudio una carrera en ciencias computacionales ya que me parece
            que es el lugar indicado para seguir aprendiendo. En mis tiempos libres desarrollo pequeñas aplicaciones
            con el objetivo de mejorar mis habilidades de programación. ' />
                </div>
                <div>
                    {FontAwesomeCodes.map(icon => {
                        return (
                            <FontAwesomeIcon className={classes.Icon} icon={icon} />)
                    })}
                </div>
            </div>

        </Aux>)
}

export default about;