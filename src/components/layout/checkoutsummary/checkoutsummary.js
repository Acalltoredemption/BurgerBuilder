import React from 'react';
import Burger from '../burger/burger';
import Button from '../ui/button/button';
import './checkoutsummary.css';


const checkoutSummary = (props) => {
    return (
        <div className="CenterIt" >

            <div>
            <h1>We hope it tastes good!</h1>
            <Burger ingredients={props.ingredients} />
            </div>
            <Button clicked={props.checkoutCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.checkoutContinued} btnType="Success">Continue</Button>
        </div>
    )
}

export default checkoutSummary;