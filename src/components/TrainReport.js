import React, { useState } from "react";

export default function TrainReport() {
  const [number, setNumber] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    alert(`Zapisano raport:\nPociąg ${number} z ${from} do ${to}\nUwagi: ${notes}`);
  };

  return (
    <div>
      <div className="header">Raport z jazdy</div>
      <div className="container">
        <input className="input" placeholder="Numer pociągu" value={number} onChange={e => setNumber(e.target.value)} />
        <input className="input" placeholder="Stacja początkowa" value={from} onChange={e => setFrom(e.target.value)} />
        <input className="input" placeholder="Stacja końcowa" value={to} onChange={e => setTo(e.target.value)} />
        <textarea className="input" placeholder="Uwagi" rows={4} value={notes} onChange={e => setNotes(e.target.value)} />
        <button className="button" onClick={handleSubmit}>Zapisz raport</button>
      </div>
    </div>
  );
}
