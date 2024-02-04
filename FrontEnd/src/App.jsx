import React, { useEffect, useState } from "react";
import PasswordGen from "./components/PasswordGen";
import GoogleAuth from "./components/GoogleAuth";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="my-5 grid place-content-center">
        <h1 className="text-slate-900 text-4xl font-extrabold">
          Password Generator
        </h1>
      </div>

      <Routes>
        <Route path="/" element={<GoogleAuth />} />

        <Route path={"/password-gen/:id"} element={<PasswordGen />} />
      </Routes>
    </>
  );
};

export default App;
