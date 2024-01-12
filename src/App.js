import imgRickMorty from './img/rick-morty.png'
import Characters from './components/Characters';
import './App.css';
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState(null);
  
  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();

    console.log(characterApi);
    setCharacters(characterApi.results);
  }

  //console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty </h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imgRickMorty} alt="Rick & Morty" className="img-home"></img>
            <button onClick={reqApi} className='btn-search'> Buscar Personaje</button>
          </>
        )
        }
      </header>
    </div>
  );
}

export default App;
