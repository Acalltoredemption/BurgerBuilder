import React from 'react';
import './toolbar.css';
import Logo from '../../logo/logo';
import NavigationItems from '../../navigation/toolbar/navigationitems/navigationitems';
import '../sidedrawer/sidedrawer.css';
import DrawerToggle from '../sidedrawer/drawertoggle/drawertoggle';

const toolbar = (props) => (
    
    <header className="Toolbar">
        <div>
          <DrawerToggle clicked={props.drawerToggleClicked} />
        </div>
        <div className="Logo">
        <Logo />
        </div>
        <nav className="DesktopOnly">
           <NavigationItems />
        </nav>
    </header>

);

export default toolbar;