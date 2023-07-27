import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {notImage} from "../../../utils/consts/FakeData.js";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styles from "../ProductCard.module.scss";
import {useToast} from "../../AlertToast.jsx";
import {useBasket} from "../../../state/BasketProvider.jsx";
import {checkBasketProducts} from "../../../utils/Helpers.js";

const ProductCard = ({product}) => {
    const toast = useToast();
    const basket = useBasket();

    const addToBasket = (product)=>{
        basket.addToBasket({
            products: [
                ...basket.basket.products,
                {
                ...product,
                quantity: 1,
                }
            ]
        })
        toast.addToast({
            show: true,
            message: `${product.title} добавлено в корзину`,
            type: 'success'
        })
    }

    const removeFromBasket = (product) => {
        basket.removeFromBasket(product.id);
        toast.addToast({
            show: true,
            message: `${product.title} удалён из корзины`,
            type: 'success'
        })
    };

    const addToFavorite = (product)=>{
        toast.addToast({
            show: true,
            message: `${product.title} добавлено в избранное`,
            type: 'success'
        })
    }

    return (
        <Card variant='outlined' className={styles.product_card} sx={{border:'none'}} >
            <CardMedia
                sx={{ aspectRatio:'16/10' }}
                image={product?.photo || notImage}
                title={product?.title}
            />
            <CardContent sx={{p:0, mt:1, mb:2.5}}>
                <Typography gutterBottom variant="h6" component="h6">
                    <b>{product?.title}</b>
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{lineHeight:1}}>
                    {product?.description}
                </Typography>
                <Typography gutterBottom variant="h6" component="p" sx={{mt:1}}>
                    <b>{product?.price} {product?.currency}</b>
                </Typography>
            </CardContent>
            <CardActions className={styles.card_actions}>
                <Button
                    className={styles.card_action_button}
                    onClick={e=> checkBasketProducts(product, basket)? removeFromBasket(product) : addToBasket(product)}
                >
                    {checkBasketProducts(product, basket)?
                        <ShoppingBagIcon className={styles.card_button_icon_shoped} />
                        :
                        <ShoppingBagOutlinedIcon className={styles.card_button_icon} />
                    }
                </Button>
                <Button
                    className={styles.card_action_button}
                    onClick={e=>addToFavorite(product)}
                >
                    <FavoriteBorderOutlinedIcon className={styles.card_button_icon} />
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;