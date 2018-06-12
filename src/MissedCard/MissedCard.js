import React, { Component } from 'react';
import './MissedCard.css';
import '../Card/Card.css';
import Audio from '../Icons/Audio.js';
import '../Icons/Audio.css';
import speaker from '../img/icon-speaker.png';
import star from '../img/icon-star.svg';
import bookmark from '../img/icon-bookmark.svg';
import PropTypes from 'prop-types';

class MissedCard extends Component {
    
    render() { 
        const {
            title,
            image,
            description,
            link,
            author,
            postedDate,
            minutesToRead,
            hasAudioAvailable,
            memberPreview
        } = this.props.missedcard;

        const showMember = (props) => {
            if ( author.isMediumMember ) {
                return (
                    <div className="authorMemberContainer">
                        <img  className="Author-img" src={author.image} alt="" />
                    </div>
                )                   
            }
            else {
                return (
                    <div>
                        <img  className="Author-img" src={author.image} alt="" />
                    </div>
                )
            }
        }

        const getDate = (props) => {
            const monthNum = postedDate.toString().substring(5,7);
            let monthAbbrev = '';
            const dayNum = postedDate.toString().substring(8,10);
            let modDayNum = dayNum;
            let dateStr = '';

            switch (parseInt(monthNum, 10)) {
                case 1:
                    monthAbbrev = 'Jan';
                    break;
                case 2:
                    monthAbbrev = 'Feb';
                    break;
                case 3:
                    monthAbbrev = 'Mar';
                    break;
                case 4:
                    monthAbbrev = 'Apr';
                    break;
                case 5:
                    monthAbbrev = 'May';
                    break;
                case 6:
                    monthAbbrev = 'Jun';
                    break;
                case 7:
                    monthAbbrev = 'Jul';
                    break;
                case 8:
                    monthAbbrev = 'Aug';
                    break;    
                case 9:
                    monthAbbrev = 'Sep';
                    break;
                case 10:
                    monthAbbrev = 'Oct';
                    break;
                case 11:
                    monthAbbrev = 'Nov';
                    break;
                case 12:
                    monthAbbrev = 'Dec';
                    break;
                default:
                    monthAbbrev = '';    
            }
            
            if (dayNum[0] === '0') {
                modDayNum = dayNum[1];
            }
            else {
                modDayNum = dayNum;
            }

            dateStr = monthAbbrev + ' ' + modDayNum;

            return dateStr;
        }

        return (
            <div className="Missed-row">
                <div className="missedUpperScreen">
                <img className="Missed-Card-img" src={image} alt="" />
                <Audio hasAudioAvailable={hasAudioAvailable} memberPreview={memberPreview} />
                <div className="missedTitleStyle"> {title} </div>
                <br></br>
                <div  className="missedDescriptionStyle">{description}</div>
                </div>
                <div className="missedAuthorInfo" >
                    {showMember(author.isMediumMember)}         
                    <div className="authorInfo-namedate">
                        <div className="authorNameStyle">{author.name}</div>
                        <div align="left"> {getDate()} - {minutesToRead} min read</div>
                    </div>
                    <div className="bookmarkContainer">
                    <img className="bookmarkStyle" src={bookmark} alt="Bookmark" />
                    </div>
                </div>
            </div>
        );
    }
}

MissedCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    author: PropTypes.instanceOf(Object),
    postedDate: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number,
    hasAudioAvailable: PropTypes.bool.isRequired,
    memberPreview: PropTypes.bool.isRequired
};

MissedCard.defaultProps = {
    name: 'Anonymous',
    memberPreview: false,
}

export default MissedCard;