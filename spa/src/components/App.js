import React from 'react';
import '../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      projects: false,
      about: false,
      contact: false,
      projectArray: []
    }
    this.renderHome = this.renderHome.bind(this);
    this.renderProject = this.renderProject.bind(this);
    this.renderAbout = this.renderAbout.bind(this);
    this.renderContact = this.renderContact.bind(this);
  }
  
  componentDidMount() {
    fetch('./projects.json')
      .then(response => response.json())
      .then(result => {
        const projects = result.map(item => {
          return item;
        })
        this.setState({
          projectArray: projects
        });
      })    
  }

  renderHome() {
    this.setState({home: true, projects: false, about: false, contact: false})
  }

  renderProject() {
    this.setState({home: false, projects: true, about: false, contact: false})
  }

  renderAbout() {
    this.setState({home: false, projects: false, about: true, contact: false})
  }

  renderContact() {
    this.setState({home: false, projects: false, about: false, contact: true})
  }

  render() {
    return (
      <div className="master-outer-div">
        <div className="master-inner-div">
          <div className="left-outer-container">
            <div className="left-inner-container">
              <Nav 
                renderHome={this.renderHome} 
                renderProject={this.renderProject}
                renderAbout={this.renderAbout}
                renderContact={this.renderContact}
              />
            </div>
          </div>
          <div className="right-outer-container">
            <div className="right-inner-container">
              {this.state.home ? <Home /> : null}
              {this.state.projects ? <Projects projects={this.state.projectArray}/> : null}
              {this.state.about ? <About /> : null}
              {this.state.contact ? <Contact /> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
