import React from 'react';
import '../css/App.css';
import Nav from './Nav';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true
    }
  }

  render() {

    return (
      <div className="master-outer-div">
        <div className="master-inner-div">
          <div className="left-outer-container">
            <div className="left-inner-container">
              <Nav />
            </div>
          </div>
          <div className="right-outer-container">
            <div className="right-inner-container">
              {this.state.home ? <Home /> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
