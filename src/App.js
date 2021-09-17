import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(`https://rickandmortyapi.com/api/character`);

  useEffect(() => {
    if (next !== null) {
      fetch(next)
        .then((response) => response.json())
        .then((response) => {
          setCharacterList([...characterList, ...response.results]);
          setNext(response.info.next);
        })
        .catch((err) => console.log(err));
    }
  }, [next]);

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
