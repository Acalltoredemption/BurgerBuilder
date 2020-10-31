import axios from 'axios';
import Button from '../../../../components/layout/ui/button/button';
import React, { Component } from 'react';
import './contactdata.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
    this.setState({loading: true});
    const order = {
        ingredients: this.props.ingredients,
        price: this.state.totalPrice,
        customer: {
            name: 'Justin Oren',
            address: {
                street: 'Teststreet 1',
                zipcode: '342424',
                country: 'Poland'
            },
            email: 'test@test.com'
        },
        deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
    .then(response => {
        this.setState({loading: false, purchasing: false});
    })
    .catch(error => console.log(error));

    }

    render () {
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className="Input" type="text" name="name" placeholder="Your Name" />
                    <input className="Input" type="email" name="email" placeholder="Your Email" />
                    <input className="Input" type="text" name="street" placeholder="Street" />
                    <input className="Input" type="text" name="postal" placeholder="Postal Code" />
                    <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }

}

export default ContactData;
