import React, {useEffect, useState} from 'react';
import {Box, Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {useBasket} from "../../state/BasketProvider.jsx";
import styles from "./BasketActions.module.scss";
import {useToast} from "../AlertToast.jsx";

const BasketOrdering = () => {
    const basket = useBasket();
    const toast = useToast();
    const [productsSum, setProductsSum] = useState(0);
    const [userData, setUserData] = useState({
        fullname: '',
        telephone: '',
        address: '',
    });

    const handleSetUserData = (object) => {
        setUserData(prevState => ({
            ...prevState,
            ...object
        }))
    }

    const ordering = () => {
        if(!basket.basket.products.length){
            toast.addToast({
                show: true,
                message: `Ваша корзина пуста`,
                type: 'error'
            })
            return
        }
        if(!userData.fullname || !userData.address || !userData.telephone){
            toast.addToast({
                show: true,
                message: `Пожалуйста заполните данные в форме`,
                type: 'warning'
            })
            return
        }
        basket.clearBasket();
        setUserData({
            fullname: '',
            telephone: '',
            address: '',
        })
        toast.addToast({
            show: true,
            message: `Уважаемый(ая) ${userData.fullname} спасибо за заказ на сумму ${productsSum}! мы отправим Ваш заказ на ${userData.address} если возникнут сложности мы позвоним Вам на номер ${userData.telephone}`,
            type: 'success'
        })
    }

    useEffect(()=>{
        let sum = 0;
        basket.basket.products.forEach((product)=>{
            sum += +product.price
                .split(' ')
                .join('') * +product.quantity
        })

        setProductsSum(sum)
    },[basket])

    return (
        <Card variant='outlined' sx={{height:'100%'}} className={styles.ordering_card}>
            <CardContent>
                <Typography variant='h5' sx={{textAlign:'center', mt:3}}>
                    <b>Оформление заказа</b>
                </Typography>

                <Box sx={{my:2}}>
                    <TextField
                        fullWidth
                        label='Имя Фамилия'
                        variant="standard"
                        type='text'
                        size='small'
                        value={userData.fullname}
                        onChange={e=>handleSetUserData({fullname: e.target.value})}
                    />
                    <TextField
                        sx={{my:2}}
                        fullWidth
                        label='Номер телефона'
                        variant="standard"
                        type='tel'
                        size='small'
                        InputProps={{ inputProps: { min: 1, max: 999 } }}
                        value={userData.telephone}
                        onChange={e=>handleSetUserData({telephone: e.target.value})}
                    />
                    <TextField
                        fullWidth
                        label='Адрес доставки'
                        variant="standard"
                        type='text'
                        size='small'
                        value={userData.address}
                        onChange={e=>handleSetUserData({address: e.target.value})}
                    />
                </Box>

                <Box sx={{mt:10}}>
                    <Typography variant='h5' sx={{textAlign:'center', mb:2}}>
                        Итого: {productsSum} руб.
                    </Typography>

                    <Button
                        className={styles.clear_basket_button}
                        fullWidth
                        variant='outlined'
                        onClick={ordering}
                    >
                        оформить заказ
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default BasketOrdering;