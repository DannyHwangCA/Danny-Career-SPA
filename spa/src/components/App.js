import React from 'react';
import '../css/App.css';
import '../css/Single.css';
import '../css/Blog.css';
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import Spa from './Spa';
import { fadeIn } from 'animate.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      projects: false,
      align: "center",
      about: false,
      contact: false,
      webpage: false,
      projectArray: [],
      display: true
    }
    this.renderHome = this.renderHome.bind(this);
    this.renderProject = this.renderProject.bind(this);
    this.renderAbout = this.renderAbout.bind(this);
    this.renderContact = this.renderContact.bind(this);
    this.renderWebpage = this.renderWebpage.bind(this);
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
    this.setState({home: true, projects: false, about: false, contact: false, webpage: false, align: "center"})
  }

  renderProject() {
    this.setState({home: false, projects: true, about: false, contact: false, webpage: false, align: "flex-start"})
  }

  renderAbout() {
    this.setState({home: false, projects: false, about: true, contact: false, webpage: false, align: "center"})
  }

  renderContact() {
    this.setState({home: false, projects: false, about: false, contact: true, webpage: false, align: "center"})
  }

  renderWebpage() {
    this.setState({home: false, projects: false, about: false, contact: false, webpage: true, align: "center"})
  }

  render() {

    return (
      <div className="master-outer-div animated fadeIn">
        <div className="master-inner-div" style={{"align-items": this.state.align}}>
          <div className="left-outer-container">
            <div className="left-inner-container">
            
                <Nav 
                  renderHome={this.renderHome} 
                  renderProject={this.renderProject}
                  renderAbout={this.renderAbout}
                  renderContact={this.renderContact}
                  renderWebpage={this.renderWebpage}
                />
            </div>
          </div>
          <div className="right-outer-container">
            <div className="right-inner-container">
                  {this.state.home ? <Home /> : null}
                  {this.state.projects ? <Projects projects={this.state.projectArray}/> : null}
                  {this.state.about ? <About /> : null}
                  {this.state.contact ? <Contact /> : null}
                  {this.state.webpage ? <Spa /> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
