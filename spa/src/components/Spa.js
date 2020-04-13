import React from 'react';

class Spa extends React.Component {
    render() {
        return(
            <div className="main-container">
                <h2>About SPA</h2>
                <h4>
                    This SPA renders a single unique component for each Nav topic. Below notes some techniques used.
                </h4>
                <p>
                    <b>
                        Navigation
                    </b>
                </p>
                <ul>
                    <li>
                            Each Nav button uses an imported FontAwesome SVG and CSS3 hover and transition effect.
                    </li>
                    <li>
                            Each nav button uses an onClick event passed from state to props that "setState" a unqiue state object.                           
                    </li>
                    <li>
                            A simple ternary is used to determine if the component is rendered or not rendered.
                    </li>
                </ul>
                <p>
                    <b>
                        Projects
                    </b>
                </p>
                <ul>
                    <li>
                        Fetches a projects.json that is processed into an array as state.projectArray.
                    </li>
                    <li>
                        projectArray state is passed as a prop and processed into projects list using map.
                    </li>
                    <li>
                        Project images imported from images folder and required for webpack.
                    </li>
                </ul>
                <p>
                    <b>
                        About
                    </b>
                </p>
                <ul>
                    <li>
                        Used Flexbox positioning to make responsive dual containers.
                    </li>
                </ul>
                <p>
                    <b>
                        Contact
                    </b>
                </p>
                <ul>
                    <li>
                        Imported FontAwesome Brand SVGs and files into flexbox responsive containers.
                    </li>
                </ul>
            </div>
        )
    }
}

export default Spa;