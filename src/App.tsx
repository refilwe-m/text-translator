import { useState } from "react";
import "./App.css";
import { Heading } from "./components";
import "core-js/stable";
import "regenerator-runtime/runtime";
import SpeechRecognition , {useSpeechRecognition} from "react-speech-recognition";

function App() {
  const [language, setLanguage] = useState("english");
  const { transcript, listening, browserSupportsSpeechRecognition} = useSpeechRecognition();
  console.log(browserSupportsSpeechRecognition);
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
          onClick={()=>SpeechRecognition.startListening().then(R=>console.log(R))}
        >
          Translate
        </button>
      </section>

      <p>{transcript}</p>
    </>
  );
}

export default App;
