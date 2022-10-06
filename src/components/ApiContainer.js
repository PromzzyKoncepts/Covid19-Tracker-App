import React from "react";
import Display from "./Display";
// import { v4 as uuidv4 } from "uuid";

const Apicontainer = ({ countries }) => {

  return (
    <div className="cards">
      {countries && countries.map((item) => (
        <Display
          key={item.id}
          uid={item.uid}
          countryRegion={item.countryRegion}
          combinedKey={item.combinedKey}
        />
      ))}
    </div>
  );
};


export default Apicontainer;