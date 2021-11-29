import React from 'react';
import './App.css';
import ColumnWrap from "./components/dragAndDrop/ColumnWrap";

function App() {
  return (
      <div className={"wrap"}>
          <div className={"container"}>
              <ColumnWrap/>

          </div>
      </div>

  );
}

export default App;
