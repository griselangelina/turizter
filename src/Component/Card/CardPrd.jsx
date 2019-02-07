import React, { Component } from 'react';
import './Card.css';
class CardPrd extends Component {
  render() {
    return (
      <div class="card maxwidth">
						<a href="#"><img class="card-img-top" src="http://turizter.com/img/thai2.jpg" alt="" /></a>
						
						         
						<a href="http://turizter.com/tour/3d-exciting-bangkok">
							</a><p class="card-title"><a href="http://turizter.com/tour/3d-exciting-bangkok">
								</a><a href="about"><strong>3D EXICITING BANGKOK</strong></a>
							  </p>
							<div class="card-body">
							  <p class="card-text">Mulai dari (/orang)</p>
							<span class="price big-price">Rp 900.000</span>
							</div>
						  
				</div>
    );
  }
}

export default CardPrd;
