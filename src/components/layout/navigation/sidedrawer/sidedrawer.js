import React from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../toolbar/navigationitems/navigationitems';
import './sidedrawer.css';
import Backdrop from '../../ui/backdrop/backdrop';
import Aux from '../../../../hoc/auxiliary';

const sideDrawer = (props) => {
let openState = ["SideDrawer", "Close"];
if (props.open) {
    openState = ["SideDrawer", "Open"];
}
    return(
        <Aux>
        <Backdrop show={props.open} clicked={props.closed} />
        <div className={openState.join(' ')}>
        <div className="Logo2">
        <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;