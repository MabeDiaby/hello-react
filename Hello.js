import React from 'react';

function Hello(props) {
    return (
        <div className="hello">
            <h1>Hello World</h1>
            <h1>Hello {props.name}</h1>
        </div>
    );
}

export default Hello;