import React from "react";
import { Route, Routes } from "react-router-dom";
import SidebarMain from "./components/ReusableComponents/SidebarComponent";

const App = () => {
  return (
    <Routes>
      <Route path="/sidebar" element={<SidebarMain />} />
    </Routes>
  );
};

export default App;
