import React, { Component }from 'react';
import Aux from '../../hoc/auxiliary';
import './layout.css';
import Toolbar from './navigation/toolbar/toolbar';
import SideDrawer from '../layout/navigation/sidedrawer/sidedrawer';



class Layout extends Component {
state = {
    showSideDrawer: true
}

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
        return {showSideDrawer: !prevState.showSideDrawer}}
        );
       
    }

    render () {
        return (
            <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer open={this.state.showSideDrawer}closed={this.sideDrawerClosedHandler} />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="content">
            {this.props.children}
        </main>
        </Aux>
        )
    }
}

export default Layout;