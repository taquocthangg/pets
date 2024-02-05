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
import { DataProvider } from "./DataContext";
import Detail from "./pages/Detail";
import { getDanhMucLM3, getUser } from "./componnents/Api";
import Detail_Category from "./pages/Detail_Category";
import { decodeAccessToken, fetchDataUser, isAuthenticated } from "./componnents/isCheckAuth";
import Profile from "./pages/Profile";

function App() {

  const [category, setCategory] = useState([]);
  const [inforUser, setInforUser] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const userIsAuthenticated = isAuthenticated();

      if (userIsAuthenticated) {
        const decodedToken = decodeAccessToken();
        console.log('Người dùng đã đăng nhập.');

        try {
          const inforData = await fetchDataUser(decodedToken.id);
          setInforUser(inforData)
          switch (decodedToken.role_id) {
            case 'R1':
              console.log('Role 1');
              break;
            case 'R2':
              console.log('Role 2');
              break;
            case 'R3':
              console.log('Role 3');
              break;
            case 'R4':
              console.log('Role 4');
              break;
            default:
              console.log('Role không hợp lệ.');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        console.log('Người dùng chưa đăng nhập. Chuyển hướng đến trang đăng nhập.');
      }
    };
    fetchData();
  }, [setInforUser]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getDanhMucLM3();
        const data = await response.category.rows;
        setCategory(data);
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Header category={category} inforUser={inforUser} />
          <Routes>
            <Route path='/' element={<Home category={category} />} />
            <Route path='/shop-all/*' element={<ShopAll />} />
            <Route path='/contacts' element={<Contatc />} />
            <Route path='/login' element={<Login setInforUser={setInforUser} />} />
            <Route path='/register' element={<Reg />} />
            <Route path='/forgot-password' element={<Forgot_Pass />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/profile/:id' element={<Profile setInforUser={setInforUser} />} />
            <Route path='/category/:name/:id' element={<Detail_Category />} />
          </Routes>
          <Footer category={category} />
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
