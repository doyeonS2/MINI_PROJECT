import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Signup from './SignUp/Signup';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </Router>
    );          
 
}

export default App;
