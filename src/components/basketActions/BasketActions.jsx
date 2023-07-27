import React from 'react';
import {Box, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import styles from "./BasketActions.module.scss";

const BasketActions = ({basket}) => {
    const navigate = useNavigate();

    return (
        <Box sx={{mt:5}}>
            {!!basket.basket.products.length&&
                <Button
                    className={styles.clear_basket_button}
                    sx={{mr:1}}
                    variant='outlined'
                    onClick={e=>basket.clearBasket()}
                >
                    Очистить корзину
                </Button>
            }
            <Button
                className={styles.redirect_to_catalog_button}
                variant='contained'
                onClick={e=>navigate('/')}
            >
                Продолжить покупки
            </Button>
        </Box>
    );
};

export default BasketActions;