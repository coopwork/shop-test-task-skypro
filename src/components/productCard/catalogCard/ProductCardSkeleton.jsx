import React from 'react';
import {Card, CardContent, Grid, Skeleton} from "@mui/material";
import styles from "../ProductCard.module.scss";

const ProductCardSkeleton = ({quantity=6}) => {
    return (
        <>
            {[...Array(quantity)].map((_,i)=>(
                <Grid key={i} xs={12} sm={6} md={4} item>
                    <Card variant='outlined' className={styles.product_card}>
                        <Skeleton animation='wave' variant="rectangular" sx={{width:'100%', height:'100%', aspectRatio:'16/10'}} />
                        <CardContent sx={{p:0, mt:1, mb:2.5}}>
                            <Skeleton animation='wave' variant="text" sx={{ fontSize: '2rem' }} />
                            <Skeleton animation='wave' variant="text" sx={{ fontSize: '1rem' }} />
                            <Skeleton animation='wave' variant="text" sx={{ fontSize: '1rem', width:'70%' }} />
                            <Skeleton animation='wave' variant="text" sx={{ fontSize: '2rem', width:'35%' }} />
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </>
    );
};

export default ProductCardSkeleton;