import React, {useContext} from 'react';

const BasketContext = React.createContext();

export const useBasket = () => {
    return useContext(BasketContext)
}
const BasketProvider = ({ children }) => {
    const [basket, setBasket] = React.useState({
        products: [],
        count: 0,
    });
    // console.log(basket)
    const addToBasket = (object) => {
        setBasket((prevState)=>({
            ...prevState,
            ...object,
            count: +object.products.length
        }))
    }

    const removeFromBasket = (id) => {
        const newArr = basket.products.filter(n => n.id !== id);
        addToBasket({
            products: newArr
        })
    }

    const clearBasket = () => {
        setBasket({
            products: [],
            count: 0,
        })
    }

    const UpdateQuantityProductsInBasket = (id, quantity) => {
        const updatedProduct = basket.products.map((product) => (
            product.id === id
                ? { ...product, quantity}
                : product
        ));

        setBasket({
            products: [...updatedProduct],
            count: +updatedProduct.length
        })
    }

    return (
        <BasketContext.Provider value={{
            basket,
            addToBasket,
            removeFromBasket,
            clearBasket,
            UpdateQuantityProductsInBasket,
        }}>
            { children }
        </BasketContext.Provider>
    );
};

export default BasketProvider;