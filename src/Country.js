import React, { useState } from "react"
import './App.css'

const Country = ({ name }) => {
  const [capital, setCapital] = useState('')
  const [currencyCode, setCurrencyCode] = useState('')
  const [language, setLanguage] = useState('')

  const handler = () => {
    if (currencyCode) {
        setCapital('')
        setCurrencyCode('')
        setLanguage('')
    } else {

      // fetching name
      fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(res => res.json())
      .then(countryResponse => {
        console.log(countryResponse);

        const { capital, currencies, languages } = countryResponse[0];

        let currencyCode = currencies[0].code;
        let language = languages[0].name

        setCapital(capital)
        setCurrencyCode(currencyCode)
        setLanguage(language)

      })
    }
  }

  return (
    <div onClick={handler} className="countryWrapper">
      {name}

      {currencyCode && (<div className="extraInfo">
        <p>
        Capital: {capital}
        </p>
        <p>
        Currency Code: {currencyCode}
        </p>
        <p>
        Language: {language}
        </p>
      </div>)}
    </div>
  )
}

export default Country

