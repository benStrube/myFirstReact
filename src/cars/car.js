import React from 'react';

class Car extends React.Component {
    myelement = <Car brand="Ford"/>
    constructor(props) {
      super(props);
      this.state = {
          brand: "Ford",
          model: "Mustang",
          color: "red",
          year: 1964,
      }
    }

    changeColor = () => {
        this.setState({color:"blue"});
    }
  
    render() {
      return (
      <div>
          <h1>My {this.state.brand} </h1>
              It is a {this.state.color} {this.state.model} from {this.state.year}
        <button
          type="button"
          onClick={this.changeColor}
          >Change color</button>
      </div>
      )
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }

  export default Car;