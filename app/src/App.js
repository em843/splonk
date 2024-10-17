import logo from "./logo.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

function App() {
  const [circles, setCircles] = React.useState([]);
  const [guess, setGuess] = React.useState("");
  const colorArray = [
    "#4CAF50",
    "#FFEB3B",
    "#9C27B0",
    "#FF9800",
    "#F44336",
    "#2196F3",
  ];

  function makeGuess(e) {
    console.log("guess");
    setGuess("");
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    const color = colorArray[randomIndex];
    const newCircle = { color: color };
    setCircles([...circles, newCircle]);
  }
  return (
    <div className="App">
      <h1>Splonk</h1>
      <p>Guess the secret word</p>
      <form className="form" onSubmit={makeGuess}>
        <TextField
          id="outlined-basic"
          className="text-field"
          variant="outlined"
          placeholder="Enter your guess..."
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
      </form>
      <br />
      <Button onClick={makeGuess} disabled={guess === ""} variant="contained">
        Guess
      </Button>
      <br />
      <br />
      <div className="circle-grid">
        {circles.map((circle) => (
          <div className="circle" style={{ backgroundColor: circle.color }}>
            {" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
