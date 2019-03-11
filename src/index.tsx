import * as ReactDOM from 'react-dom';
import * as React from 'react';
import App from './app';

const render = () => {
    ReactDOM.render(
        <div>
            <App />
        </div>,
        document.getElementById('root')
    );
};

render();