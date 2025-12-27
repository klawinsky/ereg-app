import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Menu from "./components/Menu";
import TrainReport from "./components/TrainReport";

export default function App() {
  const [user, setUser] = React.useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, password) => {
    if (email === "test@ereg.pl" && password === "haslo123") {
      const userData = { email };
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={login} />} />
      <Route
        path="/"
        element={user ? <Menu user={user} onLogout={logout} /> : <Navigate to="/login" />}
      />
      <Route
        path="/train"
        element={user ? <TrainReport /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}
