import React from 'react';
import resume from '../assets/danny-hwang-resume.docx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare, faCodepen} from '@fortawesome/free-brands-svg-icons';

class Contact extends React.Component {
    render() {
        return ( 
            <div className="contact-container">
                <div className="left-contact-container">
                    <div className="single-nav-icon project-icon">
                        <FontAwesomeIcon icon={faEnvelopeSquare} />
                        <h3>Email</h3>
                    </div>
                    <div className="single-nav-icon project-icon">
                        <FontAwesomeIcon icon={faLinkedin} /><i class="fab fa-linkedin"></i>
                        <h3>Linkedin</h3>
                    </div>
                    <div className="single-nav-icon project-icon">
                        <FontAwesomeIcon icon={faGithubSquare} />
                        <h3>Github</h3>
                    </div>
                    <div className="single-nav-icon project-icon">
                        <FontAwesomeIcon icon={faCodepen} />
                        <h3>Codepen</h3>
                    </div>
                </div>
                <div className="right-contact-container">
                    <h2>
                        Contact Me
                    </h2>
                    <p>
                        <b>Email: </b><a href="mailto: dannyhwangca@gmail.com" target="_blank">dannyhwangca@gmail.com</a>
                        <br/>
                        <b>Phone: </b><a href="tel:6262445621" target="_blank">(626) 244-5621</a>
                        <br/>
                        <b>Location: </b>Greater Los Angeles Area - Eastvale, CA 92880
                        <br/><br/>
                        <b>Resume (updated April 2020): </b><a href={resume} target="_blank" download>Download Here</a>
                        <br/><br/>
                        <b>Links</b>
                        <br/>
                        <b>Linkedin: </b><a href="https://www.linkedin.com/in/dannyhwangca/" target="_blank">https://www.linkedin.com/in/dannyhwangca/</a> 
                        <br/>
                        <b>Codepen: </b><a href="https://codepen.io/dannyhwangca" target="_blank">https://codepen.io/dannyhwangca</a>
                        <br/>
                        <b>Github: </b><a href="https://github.com/DannyHwangCA" target="_blank">https://github.com/DannyHwangCA</a> 
                    </p>
                </div>
                
            </div>
        )
    }
}

export default Contact;