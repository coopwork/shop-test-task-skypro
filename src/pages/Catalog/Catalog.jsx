import React, {useEffect, useState} from 'react';
import {productsList} from "../../utils/consts/FakeData.js";
import ProductList from "../../components/productList/ProductList.jsx";
import {useDelay} from "../../hooks/UseDelay.jsx";

const Catalog = () => {
    const products = useDelay(productsList)

    return (
        <div className='container'>
            <ProductList
                products={products}
            />
        </div>
    );
};

export default Catalog;