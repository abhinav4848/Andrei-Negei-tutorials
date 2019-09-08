import React from 'react';

const Scroll = (props) => {
    return (
        // in jsx, add style by {{}}. Outer brace is js expression, inner is object
        <div style={{ overflowY: 'scroll', border: '1px solid black', height: '700px' }}>
            {props.children}
        </div>
    )
}

export default Scroll;