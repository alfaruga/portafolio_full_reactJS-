import React, { Component } from 'react';
import Work from '../Work/Work';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import NavElements from '../Layout/SideDrawer/NavElements/NavElements';
import { Route, Switch, Redirect } from 'react-router-dom';
import classes from './main.module.css';

class Main extends Component {
    state = {
        a: 1
    }
    render() {
        return (
            <div>
                <main>
                    <NavElements />
                    <div className={classes.Main}>
                        <Switch>
                            <Route path='/Home' exact component={Home} />
                            <Route path='/My_Work' exact component={Work} />
                            <Route path='/About_me' exact component={About} />
                            <Route path='/Contact_me' exact component={Contact} />
                            <Redirect from='/' exact to='/Home' />
                            <Route render={() => <h1>Not found</h1>} />
                        </Switch>
                    </div>
                </main>

            </div>
        )
    }
}

export default Main;