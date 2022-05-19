import React from 'react';
import './style.css';

export default function App() {
  let mytext;
  var inputText = 'Hello World Rige';
  var text = 'Hello World';
  var index = inputText.indexOf(text);
  if (index >= 0) {
    mytext = (
      <>
        <span style={{ fontWeight: 'bold' }}>
          {inputText.substring(0, index)}
        </span>
        {inputText.substring(index, index + text.length)}
        <span style={{ fontWeight: 'bold' }}>
          {inputText.substring(index + text.length)}
        </span>
      </>
      // <>
      //   <b>{inputText.substring(0, index)}</b>
      //   {inputText.substring(index, index + text.length)}
      //   <b>{inputText.substring(index + text.length)}</b>
      // </>
    );
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {mytext || inputText}
    </div>
  );
}
