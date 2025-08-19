import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Backend not reachable"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>DevOps Microservice Project</h1>
        <p>Backend says: {message}</p>
      </header>
    </div>
  );
}

export default App;
