import React, { Component } from 'react';
import Header from '../Component/Header/Header';
import CarouselFront from '../Component/Carousel/Carousel';
import {Row,Col,Grid} from 'react-bootstrap';
import CardPrd from '../Component/Card/CardPrd';
import Footer from '../Component/Footer/Footer';
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
              <Col md={3}><CardPrd /></Col>
              <Col md={3}><CardPrd /></Col>
              <Col md={3}><CardPrd /></Col>
              <Col md={3}><CardPrd /></Col>
            </Row>
          </Grid>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Homepage;
