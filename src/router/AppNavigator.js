import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, CryptoCurrency, CryptoCurrencyDetail } from "../Pages/index";
import SideBar from "../components/SideBar/SideBar";
import "../App.css";
import CryptoNews from "../Pages/CryptoNews/CryptoNews";
import CryptoNewsDetail from "../components/CryptoNews/CryptoNewsDetail";

function AppNavigator() {
  return (
    <div>
      <BrowserRouter>
        <div className="navbar">
          <SideBar />
        </div>

        <div className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cryptocurrency" element={<CryptoCurrency />} />
            <Route exact path="/crypto" element={<CryptoCurrencyDetail />} />
            <Route exact path="/news" element={<CryptoNews />} />
            <Route exact path="/newsDetail" element={<CryptoNewsDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default AppNavigator;
