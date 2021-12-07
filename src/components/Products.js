import React from 'react';

function Products(props) {
    return (
        <div>
            <div class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-3 col-xs-6">
						<div class="product">
							<div class="img">
								<img src="./assets/img/dellinspiron.png" alt=""/>
							</div>
							<div class="pbody">
		                        <h3 class="pname"><b>Dell Inspiron</b></h3>
		                        <h4 class="pcat"><b>Laptop</b></h4>
								<h4 class="product-price">NRs. 50,000
									<del class="product-old-price">NRS. 48,999</del>
								</h4>
								<div class="prating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
								</div>
								<div class="product-btns">
									<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
									<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
									<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-xs-6">
						<div class="product">
							<div class="img">
								<img src="./assets/img/samsung.png" alt=""/>
								<div class="plabel">
									<span class="new">NEW</span>
								</div>
							</div>
							<div class="pbody">	
								<h3 class="pname"><b>Samsung M31</b></h3>
								<p class="pcat"><b>Accessories</b></p>
								<h4 class="product-price">NRs.25,999 <del class="product-old-price">NRs. 23,999</del></h4>
								<div class="prating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
								</div>
								<div class="product-btns">
									<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
									<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
									<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-xs-6">
						<div class="product">
							<div class="img">
								<img src="./assets/img/applewatch.png" alt=""/>
							</div>
							<div class="pbody">
								<h3 class="pname"><b>Apple Watch Series 7</b></h3>
								<p class="pcat"><b>Watches</b></p>
								<h4 class="product-price">NRs. 6,500 </h4>
								<div class="prating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o"></i>
								</div>
								<div class="product-btns">
									<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
									<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
									<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-xs-6">
						<div class="product">
							<div class="img">
								<img src="./assets/img/ipad.png" alt=""/>
								<div class="plabel">
									<span class="sale">-25%</span>
								</div>
							</div>
							<div class="pbody">
								<h3 class="pname"><b>iPad Pro 11</b></h3>
								<p class="pcat"><b>iPad</b></p>
								<h4 class="product-price">NRs. 35,000</h4>
								<div class="prating">
								</div>
								<div class="product-btns">
									<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
									<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
									<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

        </div>
    );
}

export default Products;