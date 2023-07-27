import React, {useState} from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, TextField, Typography} from "@mui/material";
import {useBasket} from "../../../state/BasketProvider.jsx";
import {useToast} from "../../AlertToast.jsx";
import styles from "../ProductCard.module.scss";

const ProductCard = ({product}) => {
    const basket = useBasket();
    const toast = useToast();
    const [quantity, setQuantity] = useState( product.quantity || 1);

    const changeQuantityProduct = (id, newQuantity) => {
        setQuantity(newQuantity)
        basket.UpdateQuantityProductsInBasket(id, newQuantity)
    }
    const removeFromBasket = (product) => {
        basket.removeFromBasket(product.id);
        toast.addToast({
            show: true,
            message: `${product.title} удалён из корзины`,
            type: 'success'
        })
    };

    return (
        <Card variant='outlined' className={styles.basket_card} sx={{ display: 'flex',justifyContent:'space-between', alignItems:'start' }}>
            <Box sx={{ display: 'flex'}}>
                <CardMedia
                    component="img"
                    sx={{ width:185, display: {xs: 'none', sm: 'block'} }}
                    image={`${product.photo}`}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="h6" variant="h6">
                            <b>{product.title}</b>
                        </Typography>
                        <Typography variant="caption" color="text.secondary" component="p" sx={{maxWidth:350, my:2}}>
                            {product.description}
                        </Typography>
                        <Typography variant="body1" component="p">
                            <b>{product.price} {product.currency}</b>
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button>
                            Избранные
                        </Button>
                        <Button
                            onClick={e=>removeFromBasket(product)}
                        >
                            Удалить
                        </Button>
                    </CardActions>
                </Box>
            </Box>
            <Box>
                <TextField
                    className={styles.basket_product_counter}
                    variant="filled"
                    type='number'
                    size='small'
                    InputProps={{ inputProps: { min: 1, max: 999 } }}
                    value={quantity}
                    onChange={e=>changeQuantityProduct(product.id, +e.target.value)}
                />
            </Box>
        </Card>
    );
};

export default ProductCard;