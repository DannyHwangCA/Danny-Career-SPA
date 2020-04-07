import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faTasks } from '@fortawesome/free-solid-svg-icons';


class Nav extends React.Component {

    render() {
        return (
            
            <div className="nav-container">
                <div className="single-nav-icon">
                    <FontAwesomeIcon icon={faUserCircle} />
                    <h3>Contact Me</h3>
                </div>
                <div className="single-nav-icon">
                    <FontAwesomeIcon icon={faTasks} />
                    <h3>Projects</h3>
                </div>

            </div>
        )
    }
}

export default Nav;