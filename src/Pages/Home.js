import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import ProductListing from '../components/ProductListing';

function Home(props) {
    return (
        <div>
            <Hero/>
            <ProductListing/>
            <Categories/>
            <Newsletter/>
        </div>
    );
}

export default Home;