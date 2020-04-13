import React from 'react';
import profilePicture from '../images/profile-image.jpg';

class About extends React.Component {
    render() {
        return(
            <div className="about-container">
                <div className="left-about-container">
                    <div>
                        <img src={profilePicture} alt="profile-image" />
                        <h3>Danny Hwang</h3>
                        <h4>
                            Web Developer<br/>
                            Frontend Engineer<br/>
                            Passionate Coder<br/>
                        </h4>
                    </div>               
                </div>
                <div className="right-about-container">
                    <h3>
                        Hello! My name is Danny Shyh Ru Hwang.
                    </h3>
                    <p>
                        I am a Frontend Engineer, Web Developer, and passionate programmer. 
                        <br/><br/>
                        I am a Senior Web Developer for <a href="https://www.equilar.com/" target="_blank">Equilar</a>, a financial technology company. 
                        I maintain, create, and update multiple web assets for Equilar.com, pardot, and our products. 
                        <br/><br/>
                        I work closely with stakeholders in design, marketing, IT, products, and leadership to code responsive webpages and features that meets & exceed our myriad of business needs.
                        <br/><br/>
                        My core coding skills include React.js, HTML5, CSS3, Javascript, & Jquery; although, I am always learning new languages and technologies. 
                        <br/><br/>
                        If you have any questions, please feel free to contact me!
                        <br/><br/>
                        <b>Email: </b><a href="mailto: dannyhwangca@gmail.com" target="_blank">dannyhwangca@gmail.com</a>
                        <br/>
                        <b>Phone: </b><a href="tel:6262445621" target="_blank">(626) 244-5621</a>
                        <br/>
                        <b>Location: </b>Greater Los Angeles Area - Eastvale, CA 92880
                    </p>
                </div>
            </div>
        )
    }
}

export default About;