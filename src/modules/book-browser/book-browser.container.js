import React from 'react';
import {Container, Row} from 'react-bootstrap';
import {AppBar} from 'material-ui';

class BookBrowser extends React.Component {
  render() {
    return (
      <div>
        <AppBar title='Book Me' />
        <Container>
          <Row>
            <p>Search will go here</p>
          </Row>
          <Row>
            <p>Book list will go here</p>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BookBrowser;