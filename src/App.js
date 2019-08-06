import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from "./components/gallery";



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      thingSearch: "hej"
    }
  }
  // handleOnClickButtonChoice = (event, value) => {
  //   event.preventDefault();
  //   console.log(event);
  //   console.log(value);
  //   let a = document.querySelector("#input");
  //   console.log(a);
  //   this.setState({thingSearch: a.value});
  //
  // };
  render() {
    return (
        <>
        <Gallery type="duck"/*{this.state.thingSearch} onClickButtonChoice={this.handleOnClickButtonChoice}*/ />
        </>
    );
  }


}

export default App;
