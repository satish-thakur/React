import React from 'react';
import './App.css';
import { useState } from 'react';

import ReactHtmlParser from "react-html-parser";

function App() {

  const [text, setText] = useState('some text ');
  return (
    <div className="App">
     <h3> { ReactHtmlParser(text) } </h3>
     <button onClick={ () => { setText(text + "hi <br />" ) } }>Click Me</button>
    </div>
  );
}

export default App;
