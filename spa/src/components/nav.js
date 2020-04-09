import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHSquare, faClipboardCheck, faIdBadge, faMobileAlt } from '@fortawesome/free-solid-svg-icons';


class Nav extends React.Component {

    render () {
        return (
            
            <div className="nav-container">
                <div onClick={this.props.renderHome} className="single-nav-icon home-icon">
                    <FontAwesomeIcon icon={faHSquare} />
                    <h3>Home</h3>
                </div>
                <div onClick={this.props.renderProject} className="single-nav-icon project-icon">
                    <FontAwesomeIcon icon={faClipboardCheck} />
                    <h3>Projects</h3>
                </div>
                <div onClick={this.props.renderAbout} className="single-nav-icon about-icon">
                    <FontAwesomeIcon icon={faIdBadge} />
                    <h3>About Me</h3>
                </div>
                <div onClick={this.props.renderContact} className="single-nav-icon contact-icon">
                    <FontAwesomeIcon icon={faMobileAlt} />
                    <h3>Contact Me</h3>
                </div>
            </div>
        )
    }
}

export default Nav;