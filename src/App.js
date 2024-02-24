import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState('');

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(word);
    // console.log(e.target[0].value);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  }

  // console.log( word );
  // console.log(process.env.REACT_APP_UNSPLASH_KEY);

  return (
    <div>
      <Header title="Images Gallery" />
      <Search
        word={word}
        setWord={setWord}
        title="Search"
        handleSubmit={handleSearchSubmit}
      />
    </div>
  );
}

export default App;
