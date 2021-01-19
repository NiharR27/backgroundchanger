import './App.css';
import React from 'react';
import Rectangle135 from './icons/Rectangle 135.svg';
import Rectangle136 from './icons/Rectangle 136.svg';
import Rectangle137 from './icons/Rectangle 137.svg';
import Rectangle207 from './icons/Rectangle 207.svg';
import fire from './icons/Icon awesome-fire.svg';
import mountain from './icons/Icon awesome-mountain.svg';
import theermometer from './icons/Icon ionic-ios-thermometer.svg';
import bike from './icons/Icon metro-directions-bike.svg';


class App extends React.Component {
  constructor() {
    super();
    var shapes = [Rectangle135,Rectangle136, Rectangle137,Rectangle207,fire,mountain,theermometer,bike];
    var randomIcon = Math.floor(Math.random() * shapes.length -1) + 1;
    var randomColor = 'F46001';
    this.state = {shapes, randomIcon, randomColor}; 
  }

  changeBg() {
    this.state.randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.state.randomIcon = Math.floor(Math.random() * this.state.shapes.length - 1) + 1;
    document.getElementById('myImg').src = this.state.shapes[this.state.randomIcon] ;
    document.getElementById('mybutton').style.background = "#" +this.state.randomColor;
    this.setState( {
      randomColor: this.state.randomColor
    }); 
  }

  render() {
    console.log(this.state.randomIcon);
    return (
      <div className ="myButton">
        <p><img id = 'myImg' src={this.state.shapes[this.state.randomIcon]} alt='svg image'/> </p>
        <p><button id = 'mybutton' onClick={() => this.changeBg()}>Change Color and  Icon</button></p>
        <p id = 'colortag'>Colour Hex: {'#' + this.state.randomColor}</p>
    </div>
    );
  }
}

export default App;
