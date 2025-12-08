"use client";

function MyButton() {
  function handleClick() {
    alert('you clicked me');
  }

  return (
    <button onClick={handleClick}>
      I'm a button
    </button>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

