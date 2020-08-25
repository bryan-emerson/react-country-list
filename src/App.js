/*
## Requirements

### Part 1: Build it (I Do)

Make it so that when the page loads (`App.js`), a list of all the countries in
the world appears on the page. Use `fetch()` inside of `componentDidMount()` to
query the [REST Countries](https://restcountries.eu) API.

Use the endpoint labeled `all` to get a list of every country and its
properties.

```
  https://restcountries.eu/rest/v2/all
```

Here's a sample response of one country:

```json
[
  {
    "name": "Congo",
    "topLevelDomain": [".cg"],
    "alpha2Code": "CG",
    "alpha3Code": "COG",
    "callingCodes": ["242"],
    "capital": "Brazzaville",
    "altSpellings": ["CG", "Congo-Brazzaville"],
    "region": "Africa",
    "subregion": "Middle Africa",
    "population": 4741000,
    "latlng": [-1, 15],
    "demonym": "Congolese",
    "area": 342000,
    "gini": 47.3,
    "timezones": ["UTC+01:00"],
    "borders": ["AGO", "CMR", "CAF", "COD", "GAB"],
    "nativeName": "République du Congo",
    "numericCode": "178",
    "currencies": [
      {
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }
    ],
    "languages": [
      {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      },
      {
        "iso639_1": "ln",
        "iso639_2": "lin",
        "name": "Lingala",
        "nativeName": "Lingála"
      }
    ],
    "translations": {
      "de": "Kongo",
      "es": "Congo",
      "fr": "Congo",
      "ja": "コンゴ共和国",
      "it": "Congo",
      "br": "Congo",
      "pt": "Congo",
      "nl": "Congo [Republiek]",
      "hr": "Kongo",
      "fa": "کنگو"
    },
    "flag": "https://restcountries.eu/data/cog.svg",
    "regionalBlocs": [
      {
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": [
          "الاتحاد الأفريقي",
          "Union africaine",
          "União Africana",
          "Unión Africana",
          "Umoja wa Afrika"
        ]
      }
    ],
    "cioc": "CGO"
  }
]
```

### Part 2: Componentize it (You Do)

- Create a `Country` component.
- Using this giant list of json data, render a `Country` component for each
  entry.
- Pass in the name of the country as a prop. Render the entire list of
  countries, each in their own component.

_NOTE:_ you might also choose to have a `CountryList` Container component in
addition to the `Country` Presentational component.

### Bonus: Clickify It

Add an event listener so that when a country is clicked, it makes another
request to search for the country by name. Using the response, display the
capital, currency code, and the name of the first language below the country
name.

Yes, we could just pass the entire object down as a prop and use it directly.
But let's pretend that we can't! Fun.

For this part we'll use the search by name api endpoint:

```
https://restcountries.eu/rest/v2/name/{name}

example:

https://restcountries.eu/rest/v2/name/armenia
```

*/

import React, { Component } from "react";
import "./App.css";

class App extends Component {

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all").then(response => response.json()).then(jsonResponse => {
      console.log('====================================');
      console.log(jsonResponse);
      console.log('====================================');
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Countries of the World</h1>
      </div>
    );
  }
}

export default App;
