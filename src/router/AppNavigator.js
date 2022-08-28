import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, CryptoCurrency, CryptoCurrencyDetail } from "../Pages/index";
import SideBar from "../components/SideBar/SideBar";
import Box from "@mui/material/Box";

import CryptoNews from "../Pages/CryptoNews/CryptoNews";
import CryptoNewsDetail from "../components/CryptoNews/CryptoNewsDetail";

function AppNavigator() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <SideBar />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cryptocurrency" element={<CryptoCurrency />} />
            <Route exact path="/crypto" element={<CryptoCurrencyDetail />} />
            <Route exact path="/news" element={<CryptoNews />} />
            <Route exact path="/newsDetail" element={<CryptoNewsDetail />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default AppNavigator;
