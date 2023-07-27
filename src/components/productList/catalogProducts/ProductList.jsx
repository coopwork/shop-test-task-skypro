import React from 'react';
import {Grid} from "@mui/material";
import ProductCard from "../../productCard/catalogCard/ProductCard.jsx";
import ProductCardSkeleton from "../../productCard/catalogCard/ProductCardSkeleton.jsx";

const ProductList = ({products}) => {
    return (
        <Grid spacing={2} container>

            {products? products.map((product, i)=>(
                <Grid xs={12} sm={6} md={4} item key={product.id}>
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