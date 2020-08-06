import React from 'react';
import Main from '../main/main';
import Backdrop from './Backdrop/Backdrop';
import SideDrawer from './SideDrawer/SideDrawer';

const layout = (props) => {

    return (<div>
        <Backdrop />
        <SideDrawer />
        <Main />

    </div>)
}

export default layout;