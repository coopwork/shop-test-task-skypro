import React from 'react';
import {Divider, Grid, Stack, Typography} from "@mui/material";
import {useBasket} from "../../state/BasketProvider.jsx";
import BasketOrdering from "../../components/basketActions/BasketOrdering.jsx";
import ProductList from "../../components/productList/basketProducts/ProductList.jsx";
import BasketActions from "../../components/basketActions/BasketActions.jsx";

const Basket = () => {
    const basket = useBasket();

    return (
        <div className='container'>
            <Grid spacing={2} container>
                <Grid xs={12} lg={8} item>
                    <Stack
                        flexDirection='row'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Typography>Товар</Typography>
                        <Typography>К-во</Typography>
                    </Stack>

                    <Divider sx={{mt:1,mb:3}}/>

                    <ProductList
                        products={basket.basket.products}
                    />

                    <BasketActions
                        basket={basket}
                    />
                </Grid>
                <Grid xs={12} sm={8} lg={4} item>
                    <BasketOrdering/>
                </Grid>
            </Grid>


        </div>
    );
};

export default Basket;