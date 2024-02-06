import React, { useEffect, useState } from "react";
import PasswordGen from "./components/PasswordGen";
import GoogleAuth from "./components/GoogleAuth";
import { Routes, Route, useParams } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<GoogleAuth />} />

        <Route path={"/password-gen/:id"} element={<PasswordGen />} />
      </Routes>
    </>
  );
};

export default App;
