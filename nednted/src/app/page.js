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
/*
function PostDataForm(){
  async function handlePostToDB() {
    const response = await fetch("http://localhost:8080/application",{
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({
        name:"react",
        kennitala: "kennitala",
        phonenumber: "1230001",
        generalemail: "testemail@gmail.is",
        uniemail: "testemail@hi.is"
      })
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
}*/
//<PostDataForm />
export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <GetDataButton />

      <div>
        <h2>post request takki</h2>  
        
      </div>
    </div>

  );
}

