import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import banner1 from '../../asset/img/banner/banner1.jpg';
import banner2 from '../../asset/img/banner/banner2.jpg';



class CarouselFront extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    componentDidMount(){ this.setState({activeIndex:0}) }

    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          direction={direction}
          onSelect={this.handleSelect}
          interval={5000} style={{marginTop: `-20px`
          }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner2}
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
         
        </Carousel>
      );
    }
  }
  
  export default CarouselFront;
