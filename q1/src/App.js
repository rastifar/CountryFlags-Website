import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import CountryContextProvider from "./context/CountryContextProvider";
import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import CountryInfo from "./components/CountryInfo";
import Test from "./components/Test";
import ThemeContextProvider from "./context/ThemeContextProvider";
const App = () => {
  return (
    <div>
    
      <CountryContextProvider>
        <ThemeContextProvider>
       
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="" element={<Main />} />
              <Route path="/:name" element={<CountryInfo />} />
            </Route>
            <Route path="/*" element={<Navigate to="/countries" />} />
          </Routes>
        </ThemeContextProvider>
      </CountryContextProvider>
    </div>
  );
};

export default App;
