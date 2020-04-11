import React from 'react';

class Projects extends React.Component {
    render() {
        const projectItems = this.props.projects.map(item => (
            <div>
              <div>
                {item.title}
              </div>
              <div>
                {item.description}
              </div>
            </div>
        ));
        return(
            <div className="outer-main-container">
                <div className="inner-main-container">
                    <div className="main-container">
                        <h2>
                            Projects and Pens
                        </h2>
                        <p>Below is a list of my projects and codepens.
                            <br />
                            This is meant as an example archive of my code. 
                            <br />
                            Please feel free to look through them! 
                        </p>
                    </div>
                    <div>
                        {projectItems}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Projects;