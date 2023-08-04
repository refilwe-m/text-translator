import { useState } from "react";
import "./App.css";
import { Heading } from "./components";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { useSpeechRecognition } from "react-speech-recognition";

function App() {
  const [language, setLanguage] = useState("english");
  const { transcript, listening } = useSpeechRecognition();
  console.log(listening);
  return (
    <>
      <Heading text="Text Translator" />
      <section className="input-section">
        <input
          className="px-4 py-2 border border-gray-400 rounded-lg"
          type="text"
          placeholder={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <button
          className="bg-teal-400"
          onClick={() => alert(`Your language is ${language}`)}
        >
          Record
        </button>
      </section>

      <p>{transcript}</p>
    </>
  );
}

export default App;
