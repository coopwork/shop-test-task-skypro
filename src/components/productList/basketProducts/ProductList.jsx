import React from 'react';
import ProductCard from "../../productCard/basketCard/ProductCard.jsx";
import {Divider, Typography} from "@mui/material";

const ProductList = ({products}) => {
    return (
        <div>
            {products.length ?
                products.map((product, i)=>(
                    <div key={product.id}>
                        <ProductCard
                            product={product}
                        />
                        {products.length-1 === i ? null:
                            <Divider sx={{my:2.5}}/>
                        }

                    </div>
                ))
                :
                <Typography variant='h3' sx={{opacity:.5, my:3,textAlign:'center'}}>
                    Корзина пуста
                </Typography>
            }
        </div>
    );
};

export default ProductList;