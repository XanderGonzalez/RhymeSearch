import { useState } from "react";

async function request(t) {
  return await fetch(
    "https://jp0ob2gb7a.execute-api.us-east-2.amazonaws.com/API/Transliterate",
    {
      method: "POST",
      body: t
    }).then((r) => r.text())
}

function Translate() {
  const [text, setText] = useState("");
  const [ipaText, setIpaText] = useState("");
  const [didRun, setDidRun] = useState(false);
  return (
    <span className="container left">
      <div className="content-box left-box">
        <textarea
          className="text-input"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setDidRun(false);
          }}
          placeholder="Enter word or phrase ..."
        ></textarea>
      </div>
      <button
        className="text-button"
        onClick={() => {
          if (text && !didRun) {
          	//request(text).then((r) => setIpaText(r));
          	request(text).then((r) => setIpaText(r));
            setDidRun(true);
        }}}
      >
        Translate to IPA
      </button>
      <div className="content-box left-box text-display">{ipaText}</div>
    </span>
  );
}

export default Translate;
