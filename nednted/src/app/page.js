"use client";

import { useState } from "react";

function GetDataButton() {
  const [rows, setRows] = useState([]);
  async function handleClick() {
    alert('you clicked me');
    const response = await fetch("/api/test");
    const data = await response.json();
    setRows(data);
  }

  return (
    <div>
      <button onClick={handleClick}>
        I'm a button
      </button>
      {rows.map(r => <div key={r.id}>{r.name}</div>)}
    </div>
  );
}

async function PostDataForm(){
  async function handlePostToDB() {
    const response = await fetch("/api/test",{
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({name:"david"})
    });
    const data = await response.json();
    console.log("gogn inserted: ", data)
  }

  return (
    <div>
      <button onClick={handlePostToDB}>
        profa post
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <GetDataButton />

      <div>
        <h2>post request takki</h2>  
        <PostDataForm />
      </div>
    </div>

  );
}

