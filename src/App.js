import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Popup from './components/Popup';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/country/:id" exact element={<Popup />} />
    </Routes>
  );
}

export default App;
