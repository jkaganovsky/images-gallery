import { React } from 'react';
import { Button, Card } from 'react-bootstrap';

function Welcome() {
  return (
    <Card style={{ backgroundColor: 'lightblue' }}>
      <Card.Body>
        <Card.Title>Images Gallery</Card.Title>
        <Card.Text>
          This is a simple application that retrieves photos using Unsplash API.
        </Card.Text>
        <Card.Text>
          In order to start, enter any search term in the input field.
        </Card.Text>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Welcome;
