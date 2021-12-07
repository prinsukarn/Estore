import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProducts} from '../redux/actions/productActions';

const ProductListing=()=>{
const products= useSelector((state)=> state);
const dispatch=useDispatch();

const fetchProducts= async ()=>{
    const response= await axios.get("https://fakestoreapi.com/products?limit=4").catch((err)=>{
        console.log("Err", err);
    });
    dispatch(setProducts(response.data));
}
    useEffect(()=>{
        fetchProducts()
    },[])

console.log("Products :",products);
    return (
        <>
        <div className="container">
            <br/>
            <h1 className="text-center text-primary">New Arrivals</h1>
        <ProductComponent/>
        </div>
        </>
    )
}

export default ProductListing;