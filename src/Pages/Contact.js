import React from 'react';

function Contact(props) {
    return (
        <div>
            {/* HEADER */}
        <header>
          {/* TOP HEADER */}
          <div id="top-header">
            <div className="container">
              <ul className="header-links pull-left">
                <li><a href="#"><i className="fa fa-phone" /> +021-95-51-84</a></li>
                <li><a href="#"><i className="fa fa-envelope-o" /> email@email.com</a></li>
                <li><a href="#"><i className="fa fa-map-marker" /> 1734 Stonecoal Road</a></li>
              </ul>
              <ul className="header-links pull-right">
                <li><a href="#"><i className="fa fa-dollar" /> USD</a></li>
                <li><a href="#"><i className="fa fa-user-o" /> My Account</a></li>
              </ul>
            </div>
          </div>
          {/* /TOP HEADER */}
          {/* MAIN HEADER */}
          <div id="header">
            {/* container */}
            <div className="container">
              {/* row */}
              <div className="row">
                {/* LOGO */}
                <div className="col-md-3">
                  <div className="header-logo">
                    <a href="#" className="logo">
                      <img src="./img/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                {/* /LOGO */}
                {/* SEARCH BAR */}
                <div className="col-md-6">
                  <div className="header-search">
                    <form>
                      <select className="input-select">
                        <option value={0}>All Categories</option>
                        <option value={1}>Category 01</option>
                        <option value={1}>Category 02</option>
                      </select>
                      <input className="input" placeholder="Search here" />
                      <button className="search-btn">Search</button>
                    </form>
                  </div>
                </div>
                {/* /SEARCH BAR */}
                {/* ACCOUNT */}
                <div className="col-md-3 clearfix">
                  <div className="header-ctn">
                    {/* Wishlist */}
                    <div>
                      <a href="#">
                        <i className="fa fa-heart-o" />
                        <span>Your Wishlist</span>
                        <div className="qty">2</div>
                      </a>
                    </div>
                    {/* /Wishlist */}
                    {/* Cart */}
                    <div className="dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                        <i className="fa fa-shopping-cart" />
                        <span>Your Cart</span>
                        <div className="qty">3</div>
                      </a>
                      <div className="cart-dropdown">
                        <div className="cart-list">
                          <div className="product-widget">
                            <div className="product-img">
                              <img src="./img/product01.png" alt="" />
                            </div>
                            <div className="product-body">
                              <h3 className="product-name"><a href="#">product name goes here</a></h3>
                              <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
                            </div>
                            <button className="delete"><i className="fa fa-close" /></button>
                          </div>
                          <div className="product-widget">
                            <div className="product-img">
                              <img src="./img/product02.png" alt="" />
                            </div>
                            <div className="product-body">
                              <h3 className="product-name"><a href="#">product name goes here</a></h3>
                              <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
                            </div>
                            <button className="delete"><i className="fa fa-close" /></button>
                          </div>
                        </div>
                        <div className="cart-summary">
                          <small>3 Item(s) selected</small>
                          <h5>SUBTOTAL: $2940.00</h5>
                        </div>
                        <div className="cart-btns">
                          <a href="#">View Cart</a>
                          <a href="#">Checkout  <i className="fa fa-arrow-circle-right" /></a>
                        </div>
                      </div>
                    </div>
                    {/* /Cart */}
                    {/* Menu Toogle */}
                    <div className="menu-toggle">
                      <a href="#">
                        <i className="fa fa-bars" />
                        <span>Menu</span>
                      </a>
                    </div>
                    {/* /Menu Toogle */}
                  </div>
                </div>
                {/* /ACCOUNT */}
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/* /MAIN HEADER */}
        </header>
        {/* /HEADER */}
        {/* NAVIGATION */}
        <nav id="navigation">
          {/* container */}
          <div className="container">
            {/* responsive-nav */}
            <div id="responsive-nav">
              {/* NAV */}
              <ul className="main-nav nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Hot Deals</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Smartphones</a></li>
                <li><a href="#">Cameras</a></li>
                <li><a href="#">Accessories</a></li>
              </ul>
              {/* /NAV */}
            </div>
            {/* /responsive-nav */}
          </div>
          {/* /container */}
        </nav>
        {/* /NAVIGATION */}
        {/* BREADCRUMB */}
        <div id="breadcrumb" className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-md-12">
                <h3 className="breadcrumb-header">Checkout</h3>
                <ul className="breadcrumb-tree">
                  <li><a href="#">Home</a></li>
                  <li className="active">Checkout</li>
                </ul>
              </div>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /BREADCRUMB */}
        {/* SECTION */}
        <div className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-md-7">
                {/* Billing Details */}
                <div className="billing-details">
                  <div className="section-title">
                    <h3 className="title">Billing address</h3>
                  </div>
                  <div className="form-group">
                    <input className="input" type="text" name="first-name" placeholder="First Name" />
                  </div>
                  <div className="form-group">
                    <input className="input" type="text" name="last-name" placeholder="Last Name" />
                  </div>
                  <div className="form-group">
                    <input className="input" type="email" name="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input className="input" type="text" name="address" placeholder="Address" />
                  </div>
                  <div className="form-group">
                    <input className="input" type="text" name="city" placeholder="City" />
                  </div>
                  <div className="form-group">
                    <input className="input" type="text" name="country" placeholder="Country" />
                  </div>
                  <div className="form-group">
                    <input className="input" type="text" name="zip-code" placeholder="ZIP Code" />
                  </div>
                  <div className="form-group">
                    <input className="input" type="tel" name="tel" placeholder="Telephone" />
                  </div>
                  <div className="form-group">
                    <div className="input-checkbox">
                      <input type="checkbox" id="create-account" />
                      <label htmlFor="create-account">
                        <span />
                        Create Account?
                      </label>
                      <div className="caption">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        <input className="input" type="password" name="password" placeholder="Enter Your Password" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Billing Details */}
                {/* Shiping Details */}
                <div className="shiping-details">
                  <div className="section-title">
                    <h3 className="title">Shiping address</h3>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="shiping-address" />
                    <label htmlFor="shiping-address">
                      <span />
                      Ship to a diffrent address?
                    </label>
                    <div className="caption">
                      <div className="form-group">
                        <input className="input" type="text" name="first-name" placeholder="First Name" />
                      </div>
                      <div className="form-group">
                        <input className="input" type="text" name="last-name" placeholder="Last Name" />
                      </div>
                      <div className="form-group">
                        <input className="input" type="email" name="email" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <input className="input" type="text" name="address" placeholder="Address" />
                      </div>
                      <div className="form-group">
                        <input className="input" type="text" name="city" placeholder="City" />
                      </div>
                      <div className="form-group">
                        <input className="input" type="text" name="country" placeholder="Country" />
                      </div>
                      <div className="form-group">
                        <input className="input" type="text" name="zip-code" placeholder="ZIP Code" />
                      </div>
                      <div className="form-group">
                        <input className="input" type="tel" name="tel" placeholder="Telephone" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Shiping Details */}
                {/* Order notes */}
                <div className="order-notes">
                  <textarea className="input" placeholder="Order Notes" defaultValue={""} />
                </div>
                {/* /Order notes */}
              </div>
              {/* Order Details */}
              <div className="col-md-5 order-details">
                <div className="section-title text-center">
                  <h3 className="title">Your Order</h3>
                </div>
                <div className="order-summary">
                  <div className="order-col">
                    <div><strong>PRODUCT</strong></div>
                    <div><strong>TOTAL</strong></div>
                  </div>
                  <div className="order-products">
                    <div className="order-col">
                      <div>1x Product Name Goes Here</div>
                      <div>$980.00</div>
                    </div>
                    <div className="order-col">
                      <div>2x Product Name Goes Here</div>
                      <div>$980.00</div>
                    </div>
                  </div>
                  <div className="order-col">
                    <div>Shiping</div>
                    <div><strong>FREE</strong></div>
                  </div>
                  <div className="order-col">
                    <div><strong>TOTAL</strong></div>
                    <div><strong className="order-total">$2940.00</strong></div>
                  </div>
                </div>
                <div className="payment-method">
                  <div className="input-radio">
                    <input type="radio" name="payment" id="payment-1" />
                    <label htmlFor="payment-1">
                      <span />
                      Direct Bank Transfer
                    </label>
                    <div className="caption">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                  <div className="input-radio">
                    <input type="radio" name="payment" id="payment-2" />
                    <label htmlFor="payment-2">
                      <span />
                      Cheque Payment
                    </label>
                    <div className="caption">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                  <div className="input-radio">
                    <input type="radio" name="payment" id="payment-3" />
                    <label htmlFor="payment-3">
                      <span />
                      Paypal System
                    </label>
                    <div className="caption">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                </div>
                <div className="input-checkbox">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">
                    <span />
                    I've read and accept the <a href="#">terms &amp; conditions</a>
                  </label>
                </div>
                <a href="#" className="primary-btn order-submit">Place order</a>
              </div>
              {/* /Order Details */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /SECTION */}
        {/* NEWSLETTER */}
        <div id="newsletter" className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-md-12">
                <div className="newsletter">
                  <p>Sign Up for the <strong>NEWSLETTER</strong></p>
                  <form>
                    <input className="input" type="email" placeholder="Enter Your Email" />
                    <button className="newsletter-btn"><i className="fa fa-envelope" /> Subscribe</button>
                  </form>
                  <ul className="newsletter-follow">
                    <li>
                      <a href="#"><i className="fa fa-facebook" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-twitter" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-instagram" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-pinterest" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /NEWSLETTER */}
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
                    <h3 className="footer-title">About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                    <ul className="footer-links">
                      <li><a href="#"><i className="fa fa-map-marker" />1734 Stonecoal Road</a></li>
                      <li><a href="#"><i className="fa fa-phone" />+021-95-51-84</a></li>
                      <li><a href="#"><i className="fa fa-envelope-o" />email@email.com</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">Categories</h3>
                    <ul className="footer-links">
                      <li><a href="#">Hot deals</a></li>
                      <li><a href="#">Laptops</a></li>
                      <li><a href="#">Smartphones</a></li>
                      <li><a href="#">Cameras</a></li>
                      <li><a href="#">Accessories</a></li>
                    </ul>
                  </div>
                </div>
                <div className="clearfix visible-xs" />
                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">Information</h3>
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
                    <h3 className="footer-title">Service</h3>
                    <ul className="footer-links">
                      <li><a href="#">My Account</a></li>
                      <li><a href="#">View Cart</a></li>
                      <li><a href="#">Wishlist</a></li>
                      <li><a href="#">Track My Order</a></li>
                      <li><a href="#">Help</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /row */}
            </div>
            {/* /container */}
          </div>
          {/* /top footer */}
          {/* bottom footer */}
          <div id="bottom-footer" className="section">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-md-12 text-center">
                  <ul className="footer-payments">
                    <li><a href="#"><i className="fa fa-cc-visa" /></a></li>
                    <li><a href="#"><i className="fa fa-credit-card" /></a></li>
                    <li><a href="#"><i className="fa fa-cc-paypal" /></a></li>
                    <li><a href="#"><i className="fa fa-cc-mastercard" /></a></li>
                    <li><a href="#"><i className="fa fa-cc-discover" /></a></li>
                    <li><a href="#"><i className="fa fa-cc-amex" /></a></li>
                  </ul>
                  <span className="copyright">
                    <a target="_blank" href="https://www.templateshub.net">Templates Hub</a>
                  </span>
                </div>
              </div>
              {/* /row */}
            </div>
            {/* /container */}
          </div>
          {/* /bottom footer */}
        </footer>
        {/* /FOOTER */}

        </div>
    );
}

export default Contact;