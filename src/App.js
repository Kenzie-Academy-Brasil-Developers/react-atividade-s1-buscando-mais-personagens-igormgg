import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      // .then((response) => console.log(response));
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>API Rick and Morty</h1>
      </header>
      <body>
        <main>
          <Characters CharacterList={characterList} />
        </main>
      </body>
    </div>
  );
}

export default App;
