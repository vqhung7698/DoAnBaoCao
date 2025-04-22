import App from '../App';
import LoginUser from '../Pages/LoginUser/LoginUser';
import RegisterUser from '../Pages/RegisterUser/RegisterUser';
import DetailProduct from '../Pages/DetailProduct/DetailProduct';
import Category from '../Pages/Category/Category';
import CompareProduct from '../Pages/CompareProduct/CompareProduct';
import InfoUser from '../Pages/InfoUser/index';
import Cart from '../Pages/Cart/Cart';
import MainLayout from '../Pages/Admin/MainLayout';
import Payments from '../Pages/Payments/Payments';
import Introduce from '../Pages/Introduce/Introduce';
import News from '../Pages/News/News';
import NewsDetail from '../Pages/News/NewsDetail';
import Checkout from '../Pages/Checkout/Checkout';
import ForgotPass from '../Pages/Forgotpass/ForgotPass';

const publicRoutes = [
    { path: '/', component: <App /> },
    { path: '/login', component: <LoginUser /> },
    { path: '/register', component: <RegisterUser /> },
    { path: '/product/:id', component: <DetailProduct /> },
    { path: '/category', component: <Category /> },
    { path: '/info-user/:id', component: <InfoUser /> },
    { path: '/cart', component: <Cart /> },
    { path: '/admin', component: <MainLayout /> },
    { path: '/payment/:id', component: <Payments /> },
    { path: '/compare-product/:id1/:id2', component: <CompareProduct /> },
    { path: '/introduce', component: <Introduce /> },
    { path: '/news', component: <News /> },
    { path: '/news/:id', component: <NewsDetail /> },
    { path: '/checkout', component: <Checkout /> },
    { path: '/forgot-password', component: <ForgotPass /> },
];

export { publicRoutes };
