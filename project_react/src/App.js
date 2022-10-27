import logo from './logo.svg';
import './App.css';
// import StyledComponent from './StylesComponent';

import Signup from './signup/Signup';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './home/Home';
import Agree from './signup/Agree';
import SignCom from './signup/SignCom';
import Login from './login/Login';

function App() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Agreement" element={<Agree />} />
        <Route path="/Complete" element={<SignCom />} />
      </Routes>
    </Router>
    );          
 
}

export default App;
