import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import RoutesContent from "./helpers/RoutesContent";

function App() {
  return (
    <div className="App">
        <Header/>
        <RoutesContent/>
    </div>
  );
}

export default App;
