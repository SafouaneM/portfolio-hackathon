import React from 'react';
import './App.css';
import Header from "./partials/section/Header";
import Featured from "./partials/section/Featured";
import Repos from "./components/Repos";

function App() {
  return (
      <div>
          <Header></Header>
          <Featured></Featured>
          <Repos></Repos>
      </div>
  );
}

export default App;
