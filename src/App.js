import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeSpotify from './pages/HomeSpotify/HomeSpotify';
import Login from './pages/Login/Login';
import Redirect from './pages/Redirect/Redirect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/webapp' element={<Redirect />} />
        <Route path='/spotify-clone' element={<HomeSpotify />} />
      </Routes>
    </Router>
  );
}

export default App;
