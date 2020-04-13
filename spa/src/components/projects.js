import React from 'react';

class Projects extends React.Component {
    render() {
        const projectItems = this.props.projects.map((item, index) => (
            <div className="project-item" key={index}>
                <div className="project-type-container">
                    <div className={item.type}>
                        <h3 className="project-type">
                            {item.type} Project
                        </h3>
                    </div>
                </div>
                <div className="project-image">
                    <a href={item.link} target="_blank">
                        <img src={require('../images/'+item.image)}/>
                    </a>
                </div>
                <div className="project-title">
                    <h2><a href={item.link} target="_blank">{item.title}</a></h2>
                    <h3>{item.subtitle}</h3>
                </div>
                <div className="project-description">
                    <p>
                        {item.description}
                    </p> 
                </div>
            </div>
        ));
        return(
            <div className="project-container">
                <div className="project-summary-container">
                    <h2>
                        Projects and Pens
                    </h2>
                    <p>
                        This Component showcases some Projects that highlight different concepts in Frontend Engineering and Web Development. Please feel free to look through them!
                        <br/><br/>
                        More Projects found at:
                        <br/><br/>
                        <b>Codepen: </b><a href="https://codepen.io/dannyhwangca" target="_blank">https://codepen.io/dannyhwangca</a>
                        <br/>
                        <b>Github: </b><a href="https://github.com/DannyHwangCA" target="_blank">https://github.com/DannyHwangCA</a> 
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