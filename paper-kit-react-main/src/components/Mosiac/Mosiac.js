// Mosaic.js

import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import './Mosiac.css'; // You can create this CSS file to style your mosaic

class Mosaic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    // Import all images from the 'assets/mosaic' folder
    const context = require.context('../../assets/img/carousel', false, /\.(png|jpe?g|svg)$/);
    const images = context.keys().map(context);

    this.setState({ images });
  }

  render() {
    const { images } = this.state;

    return (
        <Container fluid>
        <Row>
          {images.map((image, index) => (
            <Col key={index} xs="12" sm="6" md="4" lg="3">
              <Card>
                <CardImg top width="100%" src={image} alt={`Image ${index}`} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Mosaic;