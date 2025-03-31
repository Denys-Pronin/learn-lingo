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
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const toggleFavorite = (teacherId) => {
    let updatedFavorites;
    if (favorites.includes(teacherId)) {
      updatedFavorites = favorites.filter((id) => id !== teacherId);
    } else {
      updatedFavorites = [...favorites, teacherId];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

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
        <Route
          path="/teachers"
          element={
            <TeachersPage
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
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
