import { Routes, Route } from "react-router-dom";
import { lazy, memo, Suspense } from "react";
import Error from "../views/Error";
import Index from "../views/Index";
import Fashion from "../views/Fashion";
import Cart from "../views/Cart";
import Products from "../views/Products";
import Accessory from "../views/Accessory";
import Digital from "../views/Digital";

const Router = (): JSX.Element => {
  const Products = lazy(() => import("../views/Products"));
  const Cart = lazy(() => import("../views/Cart"));
  const Fashion = lazy(() => import("../views/Fashion"));
  const Accessory = lazy(() => import("../views/Accessory"));
  const Digital = lazy(() => import("../views/Digital"));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Index />} />
        {/* 라우팅 추가 해보세요. */}
        <Route path="/product/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/accessory" element={<Accessory />} />
        <Route path="/digital" element={<Digital />} />
      </Routes>
    </Suspense>
  );
};

export default memo(Router);
