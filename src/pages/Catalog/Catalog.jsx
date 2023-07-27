import React, {useEffect, useState} from 'react';
import {productsList} from "../../utils/consts/FakeData.js";
import ProductList from "../../components/productList/catalogProducts/ProductList.jsx";
import {useDelay} from "../../hooks/UseDelay.jsx";
import FilterSelect from "../../components/filterSelect/FilterSelect.jsx";
import {catalogProductsSorting} from "../../utils/Helpers.js";

const Catalog = () => {
    const products = useDelay(productsList);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [filterSettings, setFilterSettings] = React.useState('new');

    const handleSortCards = (e) => {
        setFilterSettings(e.target.value)
        setFilteredProducts([...catalogProductsSorting(e, products)])
    }

    useEffect(()=>{
        setFilteredProducts(products)
    },[products]);

    return (
        <div className='container'>
            <FilterSelect
                filterSettings={filterSettings}
                handleSortCards={handleSortCards}
            />
            <ProductList
                products={filteredProducts}
            />
        </div>
    );
};

export default Catalog;