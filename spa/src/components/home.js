import React from 'react';

class Home extends React.Component {
    render () {
        return (
            <div className="home-outer-container">
            <div className="home-intro">
                <h3>Danny Shyh Ru Hwang. Web developer. Frontend engineer.</h3>
                <p>I am a web developer and frontend engineer with a passion for coding!</p>
                <p>This site is used to display some of my projects, resume, and contact information.</p>
            
                <h3>About this site.</h3>
                <p>I built this responsive SPA using React.JS and served it over AWS using amplify.</p>
                <p>Each button renders a separate Component within this main container and uses multiple states and props to affect changes across the page.</p>
            </div>

            <div className="outer-library-container">
                <div className="library-container">
                    <h3>Notable Libraries Used:</h3>
                    <ul>
                        <li>React</li>
                        <li>Lodash</li>
                        <li>Jquery</li>
                        <li>Webpack</li>
                        <li>Babel</li>
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