import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  // console.log(images);

  function handleSearchSubmit(e) {
    e.preventDefault();
    // console.log(word);
    // console.log(e.target[0].value);

    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
        // console.log(data);
        // setImages([data, ...images]);
        // console.log(images);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  }

  // console.log( word );
  // console.log(process.env.REACT_APP_UNSPLASH_KEY);

  function handleDeleteImage(id) {
    setImages(images.filter((image) => image.id !== id));
  }

  return (
    <div>
      <Header title="Images Gallery" />
      <Search
        word={word}
        setWord={setWord}
        title="Search"
        handleSubmit={handleSearchSubmit}
      />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
      {/* {!!images.length && <ImageCard image={images[0]} />}
      {images.length > 1 && <ImageCard image={images[1]} />} */}
    </div>
  );
}

export default App;
