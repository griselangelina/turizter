import React, { Component } from 'react';
import Header from '../Component/Header/Header';
import CarouselFront from '../Component/Carousel/Carousel';
import {Row,Col,Grid} from 'react-bootstrap';
import CardPrd from '../Component/Card/CardPrd';
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <CarouselFront />
        <div>
          <Grid>
          <center>
            <div class="menuTitle"><p>Hot Destinations</p></div>
          </center>
            <Row>
              <Col sm><CardPrd /></Col>
              <Col sm><CardPrd /></Col>
              <Col sm><CardPrd /></Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Homepage;
