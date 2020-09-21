import React from 'react';
import Header from '../Layout/Header/Header';
import Aux from '../../hoc/Aux';
import { PorfilePic } from '../../assets/images/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './About.module.css'

const about = (props) => {
    const FontAwesomeCodes = ["fab,js", "fab,bootstrap", "fab,react", "fab,html5", "fab,css3", "fab,sass", "fab,git-alt", "fab,java", "fab,ubuntu", "fab,linux"]
    return (
        <Aux>
            <div className={classes.About}>
                <img className={classes.Image} src={PorfilePic} alt={"Profile"}></img>
                <div className={classes.Info}>
                    <div >
                        <Header title='About me' subtitle='Hola, me llamo Alexis Ruiz, soy un desarrollador de webapps novato.
                        Disfruto aprender sobre temas relacionados con programación y tecnología. En mis tiempos libres desarrollo pequeñas aplicaciones
                        con el objetivo de mejorar mis habilidades de programación. ' />
                    </div>

                    <div className={classes.IconContainer}>
                        {FontAwesomeCodes.map((icon, index) => {
                            return (
                                <Aux>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                        key={icon.split(",")[1] + "icon"}>
                                        {(icon.split(",")[1])}
                                        <FontAwesomeIcon className={classes.Icon} icon={[icon.split(",")[0], icon.split(",")[1]]} /><br></br>

                                    </div>
                                </Aux>)
                        })}
                    </div>
                </div>
            </div>

        </Aux>)
}

export default about;