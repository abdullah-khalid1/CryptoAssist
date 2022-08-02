import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  CryptoCurrency,
  CryptoNews,
  CryptoCurrencyDetail,
  CryptoExchange,
} from "../Pages/index";
import NavBar from "../components/NavBar";

function AppNavigator() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/news" element={<CryptoNews />} />
        <Route exact path="/cryptoexchange" element={<CryptoExchange />} />
        <Route exact path="/cryptocurrency" element={<CryptoCurrency />} />
        <Route exact path="/cryptodetail" element={<CryptoCurrencyDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppNavigator;
