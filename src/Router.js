import Product from './pages/Product';
import Inspirations from './pages/Inspirations';
import Pricing from './pages/Pricing';

const routes = [
    {
        path: "/",
        name: "Product",
        component: Product,
    },
    {
        path: "/Inspirations",
        name: "Inspirations",
        component: Inspirations,
    },
    {
        path: "/Pricing",
        name: "Pricing",
        component: Pricing,
    }
]

export default routes;