import {useBasket} from "../../state/BasketProvider.jsx";
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export function createHeaderNavigation(){
    const basket = useBasket();

    const commonNavigation = [
        {
            icon: <AppsIcon/>,
            title: 'Каталог',
            path: '/'
        },
        {
            icon: <ShoppingCartOutlinedIcon sx={{ml:2}}/>,
            title: 'Корзина',
            path: '/basket',
            alerts: basket.basket.count
        },
    ];

    return commonNavigation
}
