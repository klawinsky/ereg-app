import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const success = onLogin(email, password);
    if (success) {
      navigate("/");
    } else {
      setMsg("Nieprawidłowy login lub hasło.");
    }
  };

  return (
    <div className="center">
      <div className="container" style={{ maxWidth: 400 }}>
        <h2 className="header">eRegioJet – Logowanie</h2>
        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          placeholder="Hasło"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={handleLogin}>
          Zaloguj
        </button>
        {msg && <div className="small" style={{ marginTop: 8 }}>{msg}</div>}
      </div>
    </div>
  );
}
