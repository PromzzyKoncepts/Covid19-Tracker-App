import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../redux/apicontainer";
import PopupDetails from "./PopupDetails";


const Popup = () => {
  const { data } = useSelector((state) => state.log);
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="popup-container">
      {data
        .filter((item) => item.uid == id)
        .map((item) => (
          <PopupDetails
            key={item.id}
            id={item.id}
            confirmed={item.confirmed}
            deaths={item.deaths}
            combinedKey={item.combinedKey}
            countryRegion={item.countryRegion}
            cases28Days={item.cases28Days}
            deaths28Days={item.deaths28Days}
          />
        ))}
    </div>
  );
}
export default Popup;