import React from 'react';
import profilePicture from '../images/profile-image.jpg';

class About extends React.Component {
    render() {
        return(
            <div className="about-container">
                <div className="left-about-container">
                    <img src={profilePicture} alt="profile-image" />
                </div>
                <div className="right-about-container">

                </div>
            </div>
        )
    }
}

export default About;