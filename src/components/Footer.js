import React from 'react';

function Footer(props) {
    return (
        <div>
              {/* FOOTER */}
      <footer id="footer">
        {/* top footer */}
        <div className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <img src="assets/img/estore.png" style={{width:"150px",marginBottom:"25px"}}/>
                 <ul className="footer-links">
                    <li><a href="#"><i className="fa fa-map-marker" />Kathmandu, Nepal</a></li>
                    <li><a href="#"><i className="fa fa-phone" />+977-9840032254</a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" />estore@gmail.com</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">View Cart</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Track My Order</a></li>
                    <li><a href="#">Help</a></li>
                  </ul>
                </div>
              </div>
              <div className="clearfix visible-xs" />
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Our Company</h3>
                  <ul className="footer-links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Orders and Returns</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">We Accept</h3>
                  <ul className="footer-payments">
                  <li><a href="#"><img src="assets/img/esewa.jpg" alt="" width="80px" height="40px"/></a></li>
                  <li><a href="#"><img src="assets/img/Khalti.jpg" alt="" width="80px" height="40px"/></a></li>
                  <li><a href="#"><img src="assets/img/imepay.png" alt="" width="80px" height="40px"/></a></li>
                  <li><a href="#"><img src="assets/img/imepay.png" alt="" width="80px" height="40px"/></a></li>
                </ul> 
                
                </div>
              </div>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /top footer */}
      </footer>
      {/* /FOOTER */}
        </div>
    );
}

export default Footer;