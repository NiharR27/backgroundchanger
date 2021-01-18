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
    var lala = [Rectangle135,Rectangle136, Rectangle137,Rectangle207,fire,mountain,theermometer,bike];
    var randomIcon = Math.floor(Math.random() * lala.length -1) + 1;
    this.state = {lala, randomIcon}; 
    
  }

  changeBg() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.state.randomIcon = Math.floor(Math.random() * this.state.lala.length - 1) + 1;
    document.body.style.backgroundColor = "#" +randomColor;
    document.getElementById('myImg').src = this.state.lala[this.state.randomIcon] ;
  }

  render() {
    console.log(this.state.randomIcon);
    return (
      <div className ="myButton">
        <p><img id = 'myImg' src={this.state.lala[this.state.randomIcon]} alt='svg image'/> </p>
        <p><button id = 'button' onClick={() => this.changeBg()}>Change Color and  Icon</button></p>
    </div>
      
    );
  }
}

export default App;
