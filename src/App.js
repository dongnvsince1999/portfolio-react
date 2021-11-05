import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import './styles.css';
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
