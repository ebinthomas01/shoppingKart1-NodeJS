import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddShop from './components/AddShop';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';
import View from './components/View';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddShop/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/Delete' element={<Delete/>}/>
        <Route path='/ViewAll' element={<ViewAll/>}/>
        <Route path='/View' element={<View/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
