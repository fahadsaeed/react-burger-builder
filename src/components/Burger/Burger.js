import React from 'react';

import classes from './Burger.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


 const burger = ( props ) => {

  console.log('props.......', props.ingredients);

     let transformedIngredients = Object.keys(props.ingredients)
         .map( igKey => {
             return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                 return <BurgerIngredient key={igKey + i} type={igKey} />;
             } );
         } )
         .reduce((arr, el) => {
             return arr.concat(el)
         }, []);


     if(!transformedIngredients.length)
         transformedIngredients = 'Please add ingredients';


     console.log('ingredientsConvertIntoArray.......', transformedIngredients);
     // console.log('burgerIngredient.......', burgerIngredient);

        return (
            <div className={classes.Burger}>
                <BurgerIngredient type='bread-top'></BurgerIngredient>
                {transformedIngredients}
                <BurgerIngredient type='bread-bottom'></BurgerIngredient>
            </div>

        );
};

export  default burger