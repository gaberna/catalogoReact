import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const element = React.createElement('h1', { className: 'saludo' }, 'Hola mundi');
ReactDOM.render(element, document.getElementById('root'));
/* ReactDOM.render(<App />, document.getElementById('root')); */

