import React, {Component} from 'react';

import ElementLess  from '../../hoc/ElementLess'
import Burger  from '../../components/Burger/Burger'

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    };

    render(){
        return (
            <ElementLess>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger control</div>
            </ElementLess>

        )
    }
}

export default BurgerBuilder