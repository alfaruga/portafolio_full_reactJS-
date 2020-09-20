import React from 'react';
import Main from '../main/main';
import Backdrop from './Backdrop/Backdrop';
import SideDrawer from './SideDrawer/SideDrawer';
import Aux from '../../hoc/Aux';

const layout = (props) => {

    return (
        <Aux>
            <Backdrop />
            <SideDrawer />
            <Main />
        </Aux>)
}

export default layout;