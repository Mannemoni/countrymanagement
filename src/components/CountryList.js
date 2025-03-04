import React from "react";
import StateList from "./StateList";

const CountryList = ({ countries, editCountry, deleteCountry }) => {
  return (
    <div>
      <h2>Countries</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            {country.name} 
            <button onClick={() => editCountry(index)}>Edit</button>
            <button onClick={() => deleteCountry(index)}>Delete</button>
            <StateList countryIndex={index} states={country.states} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
