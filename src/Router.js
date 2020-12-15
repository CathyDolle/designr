import Product from './pages/Product';
import ProductRead from './pages/ProductRead';
import Inspirations from './pages/Inspirations';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Inscription from './pages/Inscription';
import InspirationsItem from './pages/InspirationsItem';

const routes = [
    {
        path: "/",
        name: "Product",
        component: Product,
    },
    {
        path: "/products/:id",
        name: "ProductRead",
        component: ProductRead,
    },
    {
        path: "/inspirations",
        name: "Inspirations",
        component: Inspirations,
    },
    {
        path: "/pricing",
        name: "Pricing",
        component: Pricing,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/inscription",
        name: "Inscription",
        component: Inscription,
    },
    {
        path: "/inspirationsitem/:id",
        name: "InspirationsItem",
        component: InspirationsItem,
    }
]

export default routes;