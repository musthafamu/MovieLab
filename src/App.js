
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './Routes/Home';
import Search from './Routes/Search';
import BannerProvider from './context/Banner.context';
import Banner from './pages/Banner';
import Details from './Routes/Details';
import TrendingProvider, { Trending } from './context/Trending.context';

function App() {
  return (
   <div>
     <BrowserRouter>
      <Navbar/> 
      <TrendingProvider>



     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>

      <Route path='/:id' element={<Details/>}/>
     </Routes>

      </TrendingProvider>
     
     </BrowserRouter>

   </div>
  );
}

export default App;
