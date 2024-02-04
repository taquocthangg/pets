// App.js
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './css/main.css'
import Header from "./componnents/Header/Header";
import Footer from "./componnents/Footer/Footer";
import Home from "./pages/Home";
import ShopAll from "./pages/ShopAll";
import Contatc from "./pages/Contatc";
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import Forgot_Pass from "./pages/Forgot_Pass";
import Page_Content_Products from "./componnents/Page_Content_Products";
import { DataProvider } from "./DataContext";
import Detail from "./pages/Detail";
import { getDanhMucLM3 } from "./componnents/Api";
import Detail_Category from "./pages/Detail_Category";
function App() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getDanhMucLM3()
      .then(res => res.category.rows)
      .then((res) => {
        setCategory(res);
      });
  }, []);
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Header category={category} />
          <Routes>
            <Route path='/' element={<Home category={category} />} />
            <Route path='/shop-all/*' element={<ShopAll />} />
            <Route path='/contacts' element={<Contatc />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Reg />} />
            <Route path='/forgot-password' element={<Forgot_Pass />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/category/:name/:id' element={<Detail_Category />} />
          </Routes>
          <Footer category={category} />
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
