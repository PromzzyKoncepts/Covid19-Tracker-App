import React from "react";

const Display = (item) => {
  const { countryRegion, continent, combinedKey } = item;
  // console.log(countryRegion, "country");

  const flag = `https://countryflagsapi.com/png/${countryRegion}`;

  return (
    <div className="item">
      <div>
        <img src={flag} alt="flag missing" className="flag" />
      </div>
      <h3>{combinedKey}</h3>
      <p>Country: {countryRegion}</p>
      <button type="button" className="viewBtn">View More</button>
    </div>
  );
};

export default Display;