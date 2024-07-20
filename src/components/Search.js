import PhonemeDropDown from "./PhonemeDropDown";
import { useState } from "react";

async function request(s) {
	const ret = "[" + s.split("").map((c, i) => {
		const nc = s[i + 1];
		const ec = (typeof nc === "undefined" || nc === ")") ? "" : ",";
		switch (c) {
			case "(":
				return "[";
			case ")":
				return "]" + ec;
			default:
				return "\"" + c + "\"" + ec;
	}}).join("") + "]";
	try {
		JSON.parse(ret);
	} catch (e) {
		alert("ERROR: Bad Search");
		return;
	}
	return await fetch(
    	"https://jp0ob2gb7a.execute-api.us-east-2.amazonaws.com/API/Search",
    	{
    		method: "POST",
    		body: s
    	}).then((r) => console.log(r))
};

function Search() {
  const [search, setSearch] = useState("");
  const [didRun, setDidRun] = useState(false);
  const [results, setResults] = useState([]);
  const addToSearch = (IPAChar) => setSearch(search + IPAChar);
  return (
    <span className="container right">
      <h1 className="main-title">Rhyme Search</h1>
      <h5 className="sub-title">
        A linguistic search engine by{" "}
        <a className="sub-title-link" href="bing.com" target="_blank">
          {" "}
          Xander
        </a>
      </h5>
      <div className="toolbar">
        <span className="phone-drop">
          <PhonemeDropDown addToSearch={addToSearch}></PhonemeDropDown>
        </span>
        <a href="google.com" target="_blank" className="help-link">
          Need help?
        </a>
      </div>
      <div className="content-box search-input-box">
        <input
          type="text"
          className="search-input"
          value={search}
          placeholder="Search..."
                  onChange={(e) => {
                      setSearch(e.target.value);
                      setDidRun(false);
                  }}
          onKeyDown={(e) => {
              if (e.keyCode === 13 && !didRun) {
                  setDidRun(true);
                  request(search).then((r) => setResults(r));
            }
          }}
        ></input>
        <i
          className="fa fa-search"
          style={{
            fontSize: "1.5em",
            cursor: "pointer",
          }}
          onClick={() => {
              if (!didRun) {
              	setDidRun(true);
                request(search).then((r) => setResults(r));
              }
          }}
        ></i>
      </div>
      <div className="content-box search-results">
        <div className="table-wrap">
          <table>
            <tbody>
            	{results.map((r, i) => {
            		return (
            			<tr key={"a" + i}>
            				<td key={"b" + i}>
            					{r[0]}
            				</td>
            				<td key={"c" + i}>
            					{r[1]}
            				</td>
            			</tr>
            		);
            	})}
            </tbody>
          </table>
        </div>
      </div>
    </span>
  );
}

export default Search;
