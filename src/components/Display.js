import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.png';

const Display = (item) => {
  const { countryRegion, combinedKey, uid } = item;
  const flag = `https://countryflagsapi.com/png/${countryRegion}`;

  return (
    <div className="item">
      <div className="flagBtn">
        <img src={flag} alt="flag missing" className="flag" />
        <Link className="links" to={`/country/${uid}`}>
          <img src={arrow} alt="arrow" className="viewBtn" />
        </Link>
      </div>

      <h4 className="province">{combinedKey}</h4>
      <p className="country">
        Country:
        {countryRegion}
      </p>
    </div>
  );
};

export default Display;
