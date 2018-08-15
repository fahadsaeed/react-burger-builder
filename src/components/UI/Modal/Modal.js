import React from 'react'

import classes from './Modal.css'

import ElementLess from '../../../hoc/ElementLess'
import Backdrop from '../../UI/Backdrop/Backdrop'


const modal = (props) => {



    return <ElementLess>
        <Backdrop show={props.show} closeModal={props.closeModal}/>
        <div className={classes.Modal}
             style={{
                 transform: props.show ?  'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.show ? 1 : 0
             }}>
            {props.children}
        </div>
    </ElementLess>

};

export default  modal;