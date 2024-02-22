import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';


function App () {
  const [ word, setWord ] = useState( '' );

  function handleSearchSubmit ( e ) {
    e.preventDefault();
    console.log(word);
    // console.log(e.target[0].value);
  }

  // console.log( word );

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={ word } setWord={ setWord } title="Search" handleSubmit={ handleSearchSubmit } />
    </div>
  );
}

export default App;
