import Product from './pages/Product';
import ProductRead from './pages/ProductRead';
import Inspirations from './pages/Inspirations';
import Pricing from './pages/Pricing';

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
    }
]

export default routes;