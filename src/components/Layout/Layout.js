import React from 'react';
import ElementLess from '../../hoc/ElementLess'

const layout = (props) => (
    <ElementLess>
        <div>Toolbar, Side Draws, Blackdrop</div>
        <main>
            {props.children}
        </main>
    </ElementLess>
);

export default layout;