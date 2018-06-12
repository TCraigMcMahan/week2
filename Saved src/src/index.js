import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TestRenderer from 'react-test-renderer';
console.log(TestRenderer);
TestRenderer.create(<App />)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
