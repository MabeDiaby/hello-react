import React from 'react';
import Hello from './Hello';

const names = ['Eddie Van Halen', 'Jimi Hendrix', 'Wes Montgomery', 'Frank Zappa', 'John Mayer']

function App(props) {


    return (
        <div className="app">
            <Hello name="Mamragbe" />
            {/* <Hello name = {names[0]} />
            <Hello name = {names[1]} />
            <Hello name = {names[2]} />
            <Hello name = {names[3]} /> */}

            {names.map(name =>
                (<Hello name = {name}
            />))}
        </div>
    );
}

export default App;