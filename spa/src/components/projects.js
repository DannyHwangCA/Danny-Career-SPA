import React from 'react';

class Projects extends React.Component {
    render() {
        const projectItems = this.props.projects.map((item, index) => (
            <div className="project-item" key={index}>
                <div className="project-type">
                    <div className={item.type}>
                        <h3>
                            {item.type}
                        </h3>
                    </div>
                </div>
                <div className="project-title">
                <h2><a href={item.link}>{item.title}</a></h2>
                </div>
                <div className="project-image">
                <a href={item.link}><img src={item.image}/></a>
                </div>
                <div className="project-date">
                    <h3>{item.date}</h3>
                </div>
                <div className="project-description">
                {item.description}
                </div>
            </div>
        ));
        return(
            <div className="project-container">
                <div className="project-summary-container">
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
                <div className="project-list-container">
                    {projectItems}
                </div>                
            </div>
        )
    }
}

export default Projects;