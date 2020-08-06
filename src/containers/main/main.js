import React, { Component } from 'react';
import Work from '../Work/Work';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import NavElements from '../Layout/SideDrawer/NavElements/NavElements';
import { Route, Switch } from 'react-router-dom';

class Main extends Component {
    state = {
        a: 1
    }
    render() {
        return (
            <div>
                <main>
                    <nav>
                        <NavElements />
                    </nav>
                </main>
                {/* Aqui iran las rutas a:
            Work
            About
            Home
            y Contacto */}
                <Switch>
                    <Route path='/Home' exact component={Home} />
                    <Route path='/My Work' exact component={Work} />
                    <Route path='/About me' exact component={About} />
                    <Route path='/Contact me' exact component={Contact} />


                </Switch>
            </div>
        )
    }
}

export default Main;