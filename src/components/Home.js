import React, { useEffect, useState } from 'react';
// import CoinContainer from "./CoinContainer";
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import './slide.css';
import Search from './search';
import Apicontainer from './ApiContainer';
import { fetchData } from '../redux/apicontainer';
import Footer from './Footer';

const Home = () => {
  const { data } = useSelector((state) => state.log);
  const [countries, setCountries] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    setCountries(data);
  }, [dispatch, data.length]);
  return (
    <div className="wrapper">
      <Slide />
      <Search data={data} setCountries={setCountries} />
      <Apicontainer countries={countries} />
      <Footer />
    </div>
  );
};

export default Home;
