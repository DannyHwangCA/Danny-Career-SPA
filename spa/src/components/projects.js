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
                    <div>
                        <h2>
                            Projects and Pens
                        </h2>
                        <h3>Below is a list of my projects and codepens. This is meant as an example archive of my code. Please feel free to look through them! </h3>
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