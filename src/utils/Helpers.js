import {productsList} from "./consts/FakeData.js";

export function catalogProductsSorting(e, products){
    let sortedProducts = [];
    if(e.target.value === 'low'){
        sortedProducts = products
            .sort((p1, p2) => +p1['price'].split(' ').join('') > +p2['price'].split(' ').join('') ? 1 : -1);
    } else
    if (e.target.value === 'hight'){
        sortedProducts = products
            .sort((p1, p2) => +p1['price'].split(' ').join('') < +p2['price'].split(' ').join('') ? 1 : -1);
    } else {
        sortedProducts = [...productsList]
    }
    return sortedProducts;
}

export function checkBasketProducts(product, basket){
    let bool;
    basket.basket.products.forEach((productFromBasket)=>{
        if(productFromBasket.id === product.id){
            bool = true
        }
    })
    return bool
}