import React from 'react';

function Hero(props) {
    return (
        <div>
      <div id="big-sale" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="big-sale">
                <ul className="big-sale-countdown">
                  <li>
                    <div>
                      <h3>13</h3>
                      <span>Days</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>12</h3>
                      <span>Hours</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>44</h3>
                      <span>Mins</span>
                    </div>
                  </li>
                </ul>
                <h2 className="text-uppercase">Biggest Sale Of The Year</h2>
                <p> Up to 50% Discount On All Items</p>
                <a className="primary-btn cta-btn" href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

        </div>
    );
}

export default Hero;