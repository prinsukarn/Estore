import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent=()=>{
    const products= useSelector((state)=> state.allProducts.products);
    const renderList =products.map((product)=>{
        const{id, title,image, price,category}=product;
        return(
            <>

           <div className="col-md-3" key={id}>
               <Link to={`/product/${id}`}>
						<div className="product" style={{width:"250px"}}>
							<div className="img">
								<img src={image} alt={title} width="250px" height="250px" style={{padding:"20px"}}/>
							</div>
							<div className="pbody">
		                        <h3 className="pname"><b>{title}</b></h3>
		                        <h4 className="pcat"><b>{category}</b></h4>
								<h4 className="product-price">NRs. {price}</h4>
								<div className="prating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								<div className="product-btns">
									<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">Add to wishlist</span></button>
									<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Add to compare</span></button>
									<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">Quick view</span></button>
								</div>
							</div>
						</div>
                    </Link>
					</div> 
            </>  
        )
    })
    return (
        <>
           {renderList}
        </>
    )
}

export default ProductComponent;