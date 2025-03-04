import React, { useState } from "react";
import CityList from "./CityList";

const StateList = ({ countryIndex, states }) => {
  const [stateList, setStateList] = useState(states || []);

  const addState = () => {
    const stateName = prompt("Enter state name:");
    if (stateName) {
      setStateList([...stateList, { name: stateName, cities: [] }]);
    }
  };

  return (
    <div>
      <h3>States</h3>
      <button onClick={addState}>Add State</button>
      <ul>
        {stateList.map((state, index) => (
          <li key={index}>{state.name} <CityList cities={state.cities} /></li>
        ))}
      </ul>
    </div>
  );
};

export default StateList;
