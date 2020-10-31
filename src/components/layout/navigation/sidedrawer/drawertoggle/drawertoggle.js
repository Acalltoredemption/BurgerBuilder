import React from 'react';
import './drawertoggle.css';


const drawerToggle = (props) => (
<div onClick={props.clicked} className="DrawerToggle">

<div className="DrawerToggley"></div>
    <div className="DrawerToggley"></div>
    <div className="DrawerToggley"></div>

</div>
    
);

export default drawerToggle;