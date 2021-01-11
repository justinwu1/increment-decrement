import React from 'react';
import ReactDOM from 'react-dom';
import IncrementDecrement from './IncrementDecrement'
const App = () => {
    return (
        <div>
            <IncrementDecrement num = {0} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)