import React from "react";
import "./App.css"

export default class App extends React.Component {
  state = {
    number: 0
  }

  add = () => {
    var secInt = setInterval(() => {

      this.setState({
        number: this.state.number < 1000 ? this.state.number + 1 : this.state.num
      });
    }, 1000)
    this.stopInt = () => {clearInterval(secInt)}
  };



  reset = () => {
    this.setState({
      number: 0 
    })
    this.stopInt()
  }


  render() {
    
    
    return (
      <div className="container">
      <div className="number">
        <h1> {this.state.number} </h1>
      </div>
      <div className="buttonBox">
        <button className="button" onClick={this.add}>Start</button>
        <button className="button" onClick={this.reset}>Reset</button>
        <button className="button" onClick={this.stopInt}>Stop</button>
      </div>
      <p className="naoNasciDesigner">a estilização vai ser quando eu tiver criatividade</p>
      </div>
    )
  }
}