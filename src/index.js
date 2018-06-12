import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TestRenderer from 'react-test-renderer';

import './App.css';
import './Card/Card.css';
import testCard from './cardtest.json';



/* describe('Card', () => {


    it('renders without crashing with data', () => {
        const div = document.createElement('div');
        const element = testCard.map((Card, index) => {
            return <Card key={index} card={Card} />
        });
        ReactDOM.render(element, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render with title, description, image, etc.', () => {
        const element = testCard.map((Card, index) => {
            return <Card key={index} card={Card} />
        });
        const component = TestRenderer.create(element);
        expect(component.toJSON()).toMatchSnapshot();
    });
});    */






console.log(TestRenderer);
TestRenderer.create(<App />)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
