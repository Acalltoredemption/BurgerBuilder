import React, { Component } from 'react';
import queryString from "query-string";
import CheckoutSummary from '../../../components/layout/checkoutsummary/checkoutsummary';
import { Route } from "react-router-dom";
import ContactData from './contactdata/contactdata';
import axios from 'axios';
class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    componentDidMount() {
        let price = 0;
        // const query = new URLSearchParams(this.props.location.search);
        // const ingredients = {};
        // for (let param of query.entries()) {
        //     ingredients[param[0]] = +param[1];
        // }
        // this.setState({ingredients: ingredients})

        const query = queryString.parse(this.props.location.search);
        const totalPrice = +query.totalPrice;
        
        const ingredients = {
          salad: +query.salad,
          meat: +query.meat,
          cheese: +query.cheese,
          bacon: +query.bacon,
        };
       
        this.setState({
          ingredients: ingredients, totalPrice: price
        });
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
 render() {
     return (
         <div>
             <CheckoutSummary
              ingredients={this.state.ingredients} 
             checkoutCancelled={this.checkoutCancelledHandler}
             checkoutContinued={this.checkoutContinuedHandler} />
             <Route path={this.props.match.path + '/contact-data'} render={() => (<ContactData ingredients={this.state.ingredients} />)} />
         </div>
     );
 }

}


export default Checkout;