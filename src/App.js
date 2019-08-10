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

  render() {
    return (
        <>
        <Gallery type="mountains"/*{this.state.thingSearch} onClickButtonChoice={this.handleOnClickButtonChoice}*/ />
        </>
    );
  }


}

export default App;
