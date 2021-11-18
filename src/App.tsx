import React from 'react';
import './App.css';
import Calculator from "./features/calculator/Calculator";
import ColumnWrap from "./components/ColumnWrap";

function App() {
  return (
      <div className={"wrap"}>
          <div className={"container"}>
              <ColumnWrap/>
              <Calculator />
          </div>
      </div>

  );
}

export default App;
