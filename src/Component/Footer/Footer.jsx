import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import turizterfrontlogo from '../../asset/img/turizterfrontlogo.png';
import './Footer.css';

class Footer extends Component {
    handleSelect(eventKey) {
        alert(`selected ${eventKey}`);
      }

  render() {
    return (
        <footer className="py-5 bg-dark-footer">
            <Grid className="footer-form-group">
                <Row>
                    <Col md={6}>
                    <h2>Dapatkan Deals &amp; Promo Terbaru</h2>
                    <p>
					    Daftarkan alamat email anda untuk mendapatkan info<br/> tentang promo dan deals terbaru kami
			        </p>
                    </Col>
                    <Col md={6}>
                        <form>
                            <div className="form-group input-group form-newsletter">
                                    <input type="email" name="txtEmailSubscribe" className="form-control form-control-newsletter" placeholder="Input your email here.." id="txtEmailSubscribe" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default btn-newsletter" type="submit" id="berlanggananID">Subscribe</button>
                                    </span>
                                    <input type="hidden" name="action" id="Hidden1" value="subscribe" />
                            </div>
                        </form>
                    </Col>
                </Row>
          </Grid>



          <div className="footer-info bg-green">
            <Grid>
                <Row>
                    <Col md={3}>
                    <div className="footer-content opening">
									<strong>Address: </strong>
									<br/>
									<span>Jl.Kepu Timur no. 48A, Kemayoran, Jakarta 10620</span>
									<br/>
				    </div>
                    </Col>
                    <Col md={3}>
                    <div className="footer-content opening">
									<strong>Address: </strong>
									<br/>
									<span>Jl.Kepu Timur no. 48A, Kemayoran, Jakarta 10620</span>
									<br/>
				    </div>
                    </Col>
                    <Col md={3}>
                    <div className="footer-content opening">
									<strong>Address: </strong>
									<br/>
									<span>Jl.Kepu Timur no. 48A, Kemayoran, Jakarta 10620</span>
									<br/>
				    </div>
                    </Col>
                    <Col md={3}>
                    <div className="footer-content opening">
									<strong>Address: </strong>
									<br/>
									<span>Jl.Kepu Timur no. 48A, Kemayoran, Jakarta 10620</span>
									<br/>
				    </div>
                    </Col>
                </Row>
            </Grid>

          </div>
        </footer>
    );
  }
}

export default Footer;
