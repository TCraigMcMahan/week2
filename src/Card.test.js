import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import './App.css';
import Card from './Card/Card.js';
import './Card/Card.css';
import testCard from './cardTest.json';









describe('Card', () => {


    it('renders without crashing with data', () => {
        const author = {
            name: "Kris Gage",
            image: "https://cdn-images-1.medium.com/fit/c/80/80/1*e7o4kbk8ofT6eKaLrO0jaw.png",
            isMediumMember: false
        };
        const div = document.createElement('div');
        const element = testCard.map((card, index) => {
            return <Card key={index} card={card} title="Do Something You Can't Win At"
            image="https://cdn-images-1.medium.com/max/800/1*cioT9CBBV2s0svet9LqKZA.png"
            postedDate="2018-03-30T07:00:00.000Z"
            author={author}
            hasAudioAvailable={false}  />
        });
        ReactDOM.render(element, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render with title, description, image, etc.', () => {
        const element = testCard.map((card, index) => {
            return <Card key={index} card={card} title="test" />
        });
        const component = TestRenderer.create(element);
        expect(component.toJSON()).toMatchSnapshot();
    });
});    
