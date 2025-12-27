import React from "react";
import { useNavigate } from "react-router-dom";

export default function Menu({ user, onLogout }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header">eRegioJet – Menu</div>
      <div className="container">
        <h3>Witaj, {user.email}</h3>
        <button className="button" onClick={() => navigate("/train")}>
          Raport z jazdy
        </button>
        <button className="button secondary" onClick={onLogout}>
          Wyloguj
        </button>
      </div>
    </div>
  );
}
