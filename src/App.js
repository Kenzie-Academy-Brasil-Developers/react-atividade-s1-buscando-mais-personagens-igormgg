import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [page]);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>API Rick and Morty</h1>
      </header>
      <body>
        <main>
          <Characters CharacterList={characterList} />
          <div className="buttons">
            <button onClick={previousPage}>Previous</button>
            <button onClick={nextPage}>Next</button>
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;
