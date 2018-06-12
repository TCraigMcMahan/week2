import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Audio from './Audio.js';

describe('Audio', () => {


    it('renders without crashing with data', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Audio hasAudioAvailable = {true}
            memberPreview  = {true} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render with title, description, image, etc.', () => {

        const component = TestRenderer.create(<Audio hasAudioAvailable = {true}
            memberPreview  = {true}/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
}); 