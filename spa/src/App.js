import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="master-outer-div">
        <div className="master-inner-div">
          <div className="left-outer-container">
            <div className="left-inner-container">
              <FontAwesomeIcon icon={faCoffee} />
            </div>
          </div>
          <div className="right-outer-container">
            <div className="right-inner-container">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
