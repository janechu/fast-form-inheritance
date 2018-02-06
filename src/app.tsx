import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Example from './components/example';

const render = () => {
    ReactDOM.render(
        <div>
            <Example />
        </div>,
        document.getElementById('root')
    );
};

render();
