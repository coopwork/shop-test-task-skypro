import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {notImage} from "../../utils/consts/FakeData.js";

const ProductCard = ({product}) => {

    // console.log(+product.price.split(' ').join(''))
    return (
        <Card variant='outlined'>
            <CardMedia
                sx={{ aspectRatio:'16/10' }}
                image={product?.photo || notImage}
                title={product?.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="h6">
                    {product?.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {product?.description}
                </Typography>
                <Typography gutterBottom variant="h6" component="p">
                    {product?.price} {product?.currency}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;