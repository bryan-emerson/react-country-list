import React, { Component } from "react";
import Country from './Country';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       countries: []
    }
  }


  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(jsonResponse => {
        this.setState({countries: jsonResponse})
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Countries of the World</h1>
        {
          this.state.countries.map(country => {
            return (
               <Country key={country.alpha3Code} name={country.name} />
             )
          })
        }
      </div>
    );
  }
}

export default App;
