import React from 'react';
import {Box, Grid} from "@mui/material";
import ProductCard from "../productCard/ProductCard.jsx";
import Loader from "../Loader.jsx";
import ProductCardSkeleton from "../productCard/ProductCardSkeleton.jsx";

const ProductList = ({products}) => {
    return (
        <Grid spacing={2} container>



            {products? products.map((product, i)=>(
                <Grid xs={4} item key={product.id}>
                    <ProductCard
                        product={product}
                    />
                </Grid>
            ))
                :<ProductCardSkeleton quantity={6}/>
            }
        </Grid>
    );
};

export default ProductList;