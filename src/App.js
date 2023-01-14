
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './Routes/Home';
import Search from './Routes/Search';
import BannerProvider from './context/Banner.context';
import Banner from './pages/Banner';
import Details from './Routes/Details';
import TrendingProvider, { Trending } from './context/Trending.context';
import SerachProvider from './context/Search.context';
import Serachdetails from './pages/Serachdetails';

function App() {
  return (
   <div>
     <BrowserRouter>
     <div> </div>
      <Navbar/> 
      <TrendingProvider>
      <SerachProvider>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/:id' element={<Details/>}/>
      <Route path='/search/:id' element={<Serachdetails/>}/>
     </Routes>

      </SerachProvider>
      
      </TrendingProvider>
     </BrowserRouter>

   </div>
  );
}

export default App;
