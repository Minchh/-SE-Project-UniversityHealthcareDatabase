import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginPage from "./LoginPage";
import RegisiterPage from "./RegisiterPage";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<div>Homepage</div>}/>
          <Route path="/register" element={<RegisiterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
