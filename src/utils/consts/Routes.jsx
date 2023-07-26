import React, {lazy} from "react";

const
    HomePage = lazy(()=> import("../../pages/Catalog/Catalog.jsx")),
    BasketPage = lazy(()=> import("../../pages/Basket/Basket.jsx"));

export const commonRoutes = [
    {
        element: <HomePage/>,
        path: '*',
    },
    {
        element: <HomePage/>,
        path: '/',
    },
    {
        element: <BasketPage/>,
        path: '/basket',
    },
]