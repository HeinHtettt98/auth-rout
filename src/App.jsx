import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./page";
import { Cointainer } from "./components";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
