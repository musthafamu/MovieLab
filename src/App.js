
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './Routes/Home';

function App() {
  return (
   <div>
     <BrowserRouter>
      <Navbar/> 
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     
     </BrowserRouter>

   </div>
  );
}

export default App;
