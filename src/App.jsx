import './main.css';
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Loading from './components/Loading';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/store/' element={<ProductList />}/>
       <Route path='/loading/' element={<Loading />}/>
       {/* <Route path='/store/:id' element={<ProductDetail/>}/> */}
       <Route path='/products/:id' element={<ProductDetail />}/>
       {/* <Route path='/' element={<ProductList/>} />  */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
