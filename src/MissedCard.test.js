import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import './App.css';
import MissedCard from './MissedCard/MissedCard';
import './MissedCard/MissedCard.css';
import './Card/Card.css';
import testCard from './cardTest.json';

describe('MissedCard', () => {

    it('renders without crashing with data', () => {
/*         const minutes = 3;
        const boolean = false;
        const author = {
            name: "Kris Gage",
            image: "https://cdn-images-1.medium.com/fit/c/80/80/1*e7o4kbk8ofT6eKaLrO0jaw.png",
            isMediumMember: false
        };
 */
        const div = document.createElement('div');
        const element = testCard.map((card, index) => {
            return <MissedCard key={index} missedcard={card} />
        });
        /*         ReactDOM.render(<MissedCard
                    title="Do Something You Can't Win At"
                    description="And make it something you love"
                    image="https://cdn-images-1.medium.com/max/800/1*cioT9CBBV2s0svet9LqKZA.png"
                    link="https://medium.com/@krisgage/do-something-you-cant-win-at-cb2e5d2ad3c1"
                    author={author}
                    postedDate="2018-03-30T07:00:00.000Z"
                    minutesToRead={minutes}
                    hasAudioAvailable={boolean}
                    memberPreview={boolean} />, div); */
        ReactDOM.render(element, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render with title, description, image, etc.', () => {
        const element = testCard.map((card, index) => {
            return <MissedCard key={index} missedcard={card} />
        });
        /*         const minutes = 3;
                const boolean = false;
                const author = {
                    name: "Kris Gage",
                    image: "https://cdn-images-1.medium.com/fit/c/80/80/1*e7o4kbk8ofT6eKaLrO0jaw.png",
                    isMediumMember: false
                };
        
                const component = TestRenderer.create(<MissedCard
                    title="Do Something You Can't Win At"
                    description="And make it something you love"
                    image="https://cdn-images-1.medium.com/max/800/1*cioT9CBBV2s0svet9LqKZA.png"
                    link="https://medium.com/@krisgage/do-something-you-cant-win-at-cb2e5d2ad3c1"
                    author={author}
                    postedDate="2018-03-30T07:00:00.000Z"
                    minutesToRead={minutes}
                    hasAudioAvailable={boolean}
                    memberPreview={boolean} />); */
        const component = TestRenderer.create(element);
        expect(component.toJSON()).toMatchSnapshot();
    });
});    
