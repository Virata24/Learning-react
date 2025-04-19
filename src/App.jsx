import './css/App.css';
import Favorite from "./pages/Favorites";
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import NavBar from './compoents/NavBar';
import { MovieProvider } from './contexts/MovieContext';



function App() {
  const movieNumber = 1;
  return (
    <MovieProvider>
      <NavBar/>
  <main className='main-content'>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/favorites" element={<Favorite/>}></Route>
    </Routes>
  </main>
  </MovieProvider>

  );
}




export default App;
