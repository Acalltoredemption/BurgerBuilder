import React, { Component } from 'react';
import Layout from './components/layout/layout';
import BurgerBuilder from './containers/burgerbuilder/burgerbuilder';
import Checkout from './containers/burgerbuilder/checkout/checkout';
import { Route } from 'react-router-dom';




class App extends Component {
  state = {
    show: true
  };

  render() {
  return (
    <div >
      <Layout>
 <Route path="/checkout" component={Checkout} />
<Route path="/" exact component={BurgerBuilder} />

      </Layout>
    </div>
  );
} 
}
export default App;
