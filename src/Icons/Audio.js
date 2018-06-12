import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Audio.css';
import speaker from '../img/icon-speaker.png';
import star from '../img/icon-star.svg';

class Audio extends Component {

    render() {

        if (this.props.hasAudioAvailable) {
            return (
                <div className="Audio">
                    <div className="audio-image">
                        <img src={speaker} alt="Play Audio" />
                    </div>
                    <div className="audio-text">Audio Available</div>
                    {this.props.memberPreview ? (
                        <div className="star-container">
                            <img src={star} alt="" />
                        </div>
                    ) : null}
                </div>
            )
        } else if (this.props.memberPreview) {
            return (
                <div className="Audio">
                    <div className="star-container">
                        <img src={star} alt="" />
                    </div>
                    <div className="audio-text">Member preview</div>
                </div>
            )
        } else {
            return null;
        }
    }
}


Audio.propTypes = {
    hasAudioAvailable: PropTypes.bool.isRequired,
    memberPreview: PropTypes.bool.isRequired
};


Audio.defaultProps = {
    hasAudioAvailable: false,
    memberPreview: false
};

export default Audio;