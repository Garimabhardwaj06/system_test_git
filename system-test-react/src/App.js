import React from 'react';
import logo from './logo.svg';
import './App.css';
import GuiTable from './components/guiTable.js'
import FormComp from './components/formComponent'
import {Grid} from './components/gridComp'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      loaded: false,
      placeholder: "Loading",
      existingData:{}
    };
  }

  componentDidMount() {
    fetch("/api/shop/")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data1 => {
        this.setState(() => {
          return {
            data1,
            loaded: true
          };
        });
      });
      
  }
  handleInput =(e)=>{
    console.log("event value----------------",e.target.value)
  }

  render() {    
    return (
      <div>
            <Grid item1={<FormComp existingData = {this.state.existingData}/>}
            item2 = {<GuiTable data = {this.state.data1} 
            handleInput= {this.handleInput.bind(this)}
            />}/>
          <br/>
          <br />  
      
      </div>
      
          );
  }

}

export default App;