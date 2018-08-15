import React from 'react'

import Button from '../../UI/Button/Button'

const checkoutSummary = (props) => {

    const ingredients = Object.keys(props.ingredients)
        .map(ingredient => {
            return <li key={ingredient}>
                <span style={{textTransform : 'captailze'}}>{ingredient}</span> :
                {props.ingredients[ingredient]}
                </li>
        });

    return (
        <div>
            <h1>Your Order</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <ul>
                {ingredients}
            </ul>

            <p>Total price <strong>{props.price.toFixed(2)}</strong></p>
            <p>Continue to checked?</p>
            <Button btnType={'Danger'} clicked={props.closeModalHandler}>CANCEL</Button>
            <Button btnType={'Success'}  clicked={props.continueCheckout}>Continues</Button>
        </div>
    )

};

export default  checkoutSummary;