import React from 'react';

class Spa extends React.Component {
    render() {
        return(
            <div className="main-container">
                <h2>About SPA</h2>
                <h4>
                    This SPA renders a single unique component for each Nav topic. Below notates some tech stacks used to create this SPA.
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
                            Each nav button uses an onClick event passed from state to props that "setState" a unqiue state object as true or false.                           
                    </li>
                    <li>
                            A simple ternary is used to determine if the component is rendered or not rendered based on the onClick event fired.
                    </li>
                    <li>
                            The state change causes a rerender of the appropriate component inside the container.
                    </li>
                </ul>
            </div>
        )
    }
}

export default Spa;