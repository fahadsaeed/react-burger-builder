import React, {Component} from 'react';

import ElementLess  from '../../hoc/ElementLess'
import Burger  from '../../components/Burger/Burger'
import BuildControls  from '../../components/Burger/BuildControls/BuildControls'
import Modal  from '../../components/UI/Modal/Modal'
import CheckoutSummary  from '../../components/Burger/checkoutSummary/checkoutSummary'

const ING_PRICE = {
    salad: 2.5,
    bacon: 1.5,
    cheese: 2,
    meat: 3.5
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        price : 4,
        purchasable : false,
        checkout : false
    };


    addIngredient(type){
        let  ingredients = {...this.state.ingredients};

        if(ingredients[type] >= 4)
            return;

        let  oldPrice = this.state.price;
        const oldCount = ingredients[type];
        const newCount = oldCount + 1;

        let  price = oldPrice + ING_PRICE[type];
        ingredients[type] = newCount;
        // this.setState({ingredients, price});
        //
        // this.purchasable();
        // this.setState({ingredients, price}, this.purchasable());
        this.setState({ingredients, price}, () => this.purchasable());

    }

    removeIngredient(type){
        let  ingredients = {...this.state.ingredients};

        if(ingredients[type] <= 0)
            return;

        let  oldPrice = this.state.price;
        const oldCount = ingredients[type];
        const newCount = oldCount - 1;

        let  price = oldPrice - ING_PRICE[type];

        ingredients[type] = newCount;

        this.setState({ingredients, price}, () => this.purchasable());


    }


    purchasable(){
        let  ingredients = {...this.state.ingredients};
        let sum = Object.keys(ingredients)
                 .map((key) => ingredients[key])
            .reduce((sum, el) => sum + el , 0) ;

        this.setState({purchasable : sum > 0})
    }

    checkoutHandler = () =>{
        this.setState({
            checkout : true
        })
    };

    closeModalHandler = () =>{
        this.setState({
            checkout : false
        })
    };

    continueCheckout = () =>{
       alert('checkout ..........')
    };

    render(){
        let buttonInfo = {...this.state.ingredients};
        for(let key in buttonInfo){
            buttonInfo[key] = {
                less: buttonInfo[key] <= 0,
                more: buttonInfo[key] >= 4
            };
        }

        return (
            <ElementLess>
                <Modal show={this.state.checkout} closeModal={this.closeModalHandler}>
                    <CheckoutSummary
                        ingredients={this.state.ingredients}
                        price={this.state.price}
                        closeModalHandler={this.closeModalHandler}
                        continueCheckout={this.continueCheckout}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    buttonInfo = {buttonInfo}
                    totalPrice={this.state.price}
                    addIngredient={(type) => this.addIngredient(type)}
                    removeIngredient={(type) => this.removeIngredient(type)}
                    purchasable={this.state.purchasable}
                    checkout={this.checkoutHandler}
                />
            </ElementLess>

        )
    }
}

export default BurgerBuilder