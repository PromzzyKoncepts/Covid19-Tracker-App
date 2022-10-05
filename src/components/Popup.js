import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Popup = () => {
  const { data } = useSelector((state) => state.log);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div>
      <h3>Covid19 Data</h3>
    </div>
  )
}
export default Popup;