import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.jsx";
import Header from "./Header/Header.jsx";
import TeachersPage from "../pages/TeachersPage/TeachersPage.jsx";
import LoginForm from "./LoginForm/LoginForm.jsx";
import RegisterForm from "./RegisterForm/RegisterForm.jsx";
import { useEffect, useState } from "react";

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(localStorage.getItem("user"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const showLoginForm = () => {
    setIsLoginVisible(true);
  };
  const closeLoginForm = () => {
    setIsLoginVisible(false);
  };
  const showRefisterForm = () => {
    setIsRegisterVisible(true);
  };
  const closeRegisterForm = () => {
    setIsRegisterVisible(false);
  };
  return (
    <>
      <Header
        setUser={setUser}
        user={user}
        showLoginForm={showLoginForm}
        showRefisterForm={showRefisterForm}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
      </Routes>

      <LoginForm
        setUser={setUser}
        closeLoginForm={closeLoginForm}
        isLoginVisible={isLoginVisible}
      />
      <RegisterForm
        setUser={setUser}
        closeRegisterForm={closeRegisterForm}
        isRegisterVisible={isRegisterVisible}
      />
    </>
  );
}

export default App;
