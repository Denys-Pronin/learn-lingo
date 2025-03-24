import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.jsx";
import Header from "./Header/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
