"use client";

import { useState } from "react";

function GetDataButton() {
  const [rows, setRows] = useState([]);
  async function handleClick() {
    alert('you clicked me');
    const response = await fetch("http://localhost:8080/application");
    const data = await response.json();
    setRows(data);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Im a button
      </button>
      {rows.map(r => <div key={r.id}>{r.name}</div>)}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Verið velkomin á heimasíðu ned og ted!</h1>
      <GetDataButton />
    </div>

  );
}

