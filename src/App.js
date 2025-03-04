import React, { useState } from "react";
import CountryList from "./components/CountryList";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  // Add a new country
  const addCountry = () => {
    const countryName = prompt("Enter country name:");
    if (countryName) {
      setCountries([...countries, { name: countryName, states: [] }]);
    }
  };

  // Edit an existing country
  const editCountry = (index) => {
    const newName = prompt("Edit country name:", countries[index].name);
    if (newName && window.confirm("Are you sure you want to update this country?")) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = newName;
      setCountries(updatedCountries);
    }
  };

  // Delete a country and all associated states and cities
  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country? All associated states and cities will be removed.")) {
      const updatedCountries = countries.filter((_, i) => i !== index);
      setCountries(updatedCountries);
    }
  };

  // Add a new state to a country
  const addState = (countryIndex) => {
    const stateName = prompt("Enter state name:");
    if (stateName) {
      setCountries((prevCountries) => {
        const updatedCountries = [...prevCountries];
        updatedCountries[countryIndex].states.push({ name: stateName, cities: [] });
        return updatedCountries;
      });
    }
  };

  return (
    <div className="app-container">
      <h1>Country, State & City Management</h1>
      <button onClick={addCountry}>Add Country</button>
      <CountryList 
        countries={countries} 
        editCountry={editCountry} 
        deleteCountry={deleteCountry} 
        addState={addState} 
      />
    </div>
  );
}

export default App;
