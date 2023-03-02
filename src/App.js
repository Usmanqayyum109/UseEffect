import React, { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [num, setNum] = useState(0);
  const [min, setMin] = useState(0);

  useEffect(() => {
    alert("You Clicked");
    console.log("button clicked");
  }, [num]);
  const add = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <button
        style={{
          border: "10px",
          width: "90px",
          height: "50px",
          margin: "20px",
          borderRadius: "20px",
          color: "red",
          background: "yellow",
        }}
        onClick={add}
      >
        Click Me {num}
      </button>
      <br />
      <button
        style={{
          border: "10px",
          width: "90px",
          height: "50px",
          margin: "20px",
          borderRadius: "20px",
          color: "red",
          background: "yellow",
        }}
        onClick={() => {
          setMin(min + 1);
        }}
      >
        Click Me {min}
      </button>
    </div>
  );
}
