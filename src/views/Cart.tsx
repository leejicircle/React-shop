import CartView from "../components/carts/CartView";
import { Suspense } from "react";

import ProductsDetailLoad from "../components/products/ProductsDetailLoad";

const Cart = (): JSX.Element => {
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <Suspense fallback={<ProductsDetailLoad />}>
        <CartView />
      </Suspense>
    </section>
  );
};

export default Cart;
