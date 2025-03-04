import React, { useState } from "react";

const CityList = ({ cities }) => {
  const [cityList, setCityList] = useState(cities || []);

  const addCity = () => {
    const cityName = prompt("Enter city name:");
    if (cityName) {
      setCityList([...cityList, cityName]);
    }
  };

  return (
    <div>
      <h4>Cities</h4>
      <button onClick={addCity}>Add City</button>
      <ul>
        {cityList.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
