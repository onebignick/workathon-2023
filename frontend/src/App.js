import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import Swipe from './components/swipe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Swipe/>}/>
      </Routes>
    </Router>
  );
}

export default App;
