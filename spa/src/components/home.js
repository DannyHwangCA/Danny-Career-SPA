import React from 'react';

class Home extends React.Component {
    render () {
        return (
            <div className="home-outer-container animated fadeIn">
                <div className="home-intro">
                    <h3>Danny Shyh Ru Hwang. Web developer. Frontend engineer.</h3>
                    <p>Hello! Welcome to my responsive React Information SPA.</p>
                    <p>This SPA is used to display some of my projects, resume, and contact information.</p>
                    <p>I built this responsive SPA with React.JS and served it over an AWS development server.</p>
                    <p>Each nav button renders a separate Component within this main container and uses multiple states and props to affect changes across the page.</p>
                    <p>Click on the "SPA" button in the nav bar for more information about this SPA.</p>
                </div>

                <div className="outer-library-container">
                    <div className="library-container">
                        <h3>Notable Libraries Used:</h3>
                        <ul>
                            <li>React</li>
                            <li>Animate.css</li>
                            <li>AWS Amplify</li>
                            <li>Babel & Webpack</li>
                        </ul>
                    </div>
                    <div className="library-container">
                        <h3>Notable Languages Used:</h3>
                        <ul>
                            <li>JSX</li>
                            <li>Javascript</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default Home;