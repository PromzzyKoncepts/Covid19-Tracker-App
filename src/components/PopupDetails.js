import React from 'react';
import { Link } from 'react-router-dom';
import back from '../assets/back.png';

const PopupDetails = (item) => {
  const {
    countryRegion, combinedKey, confirmed, deaths, deaths28Days, cases28Days,
  } = item;
  const flag = `https://countryflagsapi.com/png/${countryRegion}`;

  return (
    <div className="popup">
      <Link to="/" className="links" alt="back">
        <img src={back} alt="Go back" className="back" />
      </Link>
      <h2 className="region">
        {combinedKey}
        {' '}
        Covid19 Statistics
      </h2>
      <img src={flag} alt="flag missing" className="popupFlag" />
      <h4 className="title">
        Country:
        {' '}
        {countryRegion}
      </h4>
      <div>
        <h4 className="info">
          Total Confirmed Cases:
          {' '}
          <span>{confirmed}</span>
        </h4>
        <h4 className="info">
          Total Deaths:
          {' '}
          <span>{deaths}</span>
        </h4>
        <h4 className="info">
          Cases per Month:
          {' '}
          <span>{cases28Days}</span>
        </h4>
        <h4 className="info">
          Deaths per Month:
          {' '}
          <span>{deaths28Days}</span>
        </h4>
      </div>
    </div>
  );
};
export default PopupDetails;
