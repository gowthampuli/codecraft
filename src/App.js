import React, { useMemo, useState } from 'react';
import './App.css';
import { VscRunAll } from "react-icons/vsc";
import getLanguageIcon from './languageicons';

import Prism from 'prismjs';
import "prismjs/themes/prism.css"

function CodeEditor({ language, value, onChange }) {


  const code = useMemo(() => {
    return Prism.highlight(value, Prism.languages[language], language,);
  }, [value, language]);

  // console.log(code)

  return (

    <div>

      <label> {language} {getLanguageIcon(language)} </label>

      <div className="codeEditor">
        <textarea onChange={(e) => onChange(e.target.value)}></textarea>
        <pre dangerouslySetInnerHTML={{ __html: code }}>

        </pre>
      </div>


      {/* <CodeMirror
        value={value}
        onBeforeChange={(editor, data, value) => {
          onChange(value);
        }}
        options={options}
      /> */}
    </div>
  );
}

function App() {
  const [htmlCode, setHTMLCode] = useState("");
  const [cssCode, setCSSCode] = useState("");
  const [jsCode, setJSCode] = useState("");

  const handleOutput = () => {
    const iframe = document.getElementById("output");
    iframe.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";

    try {
      iframe.contentWindow.eval(jsCode);
    } catch (error) {
      alert('JavaScript execution error:', error);

    }
  };



  return (
    <div className="playground">
      <div className="left">
        <CodeEditor language="html" value={htmlCode} onChange={setHTMLCode} />
        <CodeEditor language="css" value={cssCode} onChange={setCSSCode} />
        <CodeEditor language="javascript" value={jsCode} onChange={setJSCode} />
      </div>
      <div className="right">
        <button onClick={handleOutput}>Run <VscRunAll style={{ marginTop: '2px' }} /> </button>
        <iframe title="Output" id="output"></iframe>
      </div>
    </div>
  );
}

export default App;