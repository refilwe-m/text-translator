import { useState } from "react";
import "./App.css";
import { Heading } from "./components";

function App() {
  const [language, setLanguage] = useState("english");

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
          Translate
        </button>
      </section>

      <p>
        I love peace and solitude.
        <br /> I learn better in quietness and I prefer to watch the sky and
        <br /> sing songs in my heart than to be in a loud city
      </p>
    </>
  );
}

export default App;
