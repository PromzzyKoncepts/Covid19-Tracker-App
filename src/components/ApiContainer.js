import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/apicontainer";
import Display from "./Display";

const Apicontainer = () => {
  const { data } = useSelector(((state) => state.log));
  // console.log( state.data);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="cards">
      {data.map((item) => (
        <Display
          // key={item.id}
          countryRegion={item.countryRegion}
          combinedKey={item.combinedKey}
          // continent={item.continent}
        />
      ))}
    </div>
  );
};


export default Apicontainer;