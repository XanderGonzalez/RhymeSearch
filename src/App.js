import "./App.css";
import Translate from "./components/Translate";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <header className="App-header">
        <Translate></Translate>
        <Search></Search>
      </header>
    </div>
  );
}

export default App;
