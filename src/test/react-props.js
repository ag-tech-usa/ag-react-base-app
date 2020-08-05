
import React from 'reat';

class Car extends React.Component {
    render() {
      return <h2>I am a {this.props.brand}!</h2>;
    }
  }
  
  class Garage extends React.Component {
    render() {
      return (
        <div>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
        </div>
      );
    }
  }
  
  ReactDOM.render(<Garage />, document.getElementById('root'));