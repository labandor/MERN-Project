import Nav from './components/Nav.jsx';
import Home from  "./screens/Home.jsx";
import Jokes from "./screens/Jokes.jsx";
import JokePunchLine from "./screens/JokePunchLine.jsx";
import JokeCreate from "./screens/JokeCreate.jsx";
import JokeEdit from "./screens/JokeEdit.jsx";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jokes" element={<Jokes />} />
        <Route path="/jokes/:id" element={<JokePunchLine />} />
        <Route path="/add-joke" element={<JokeCreate />} />
        <Route path="/jokes/:id/edit" element={<JokeEdit />} />
      </Routes>
    </div>
  );
}

export default App;
