import { ICartState, addToCart, cartState, cartTotalPrice, removeFromCart } from "../../store/cart";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { productsList } from "../../store/products";

import Error from "../../views/Error";
import { toCurrencyFormat } from "../../helpers/helpers";
import { Link } from "react-router-dom";
import ProductsDetailLoad from "../products/ProductsDetailLoad";

const CartList = (): JSX.Element => {
  // Recoil을 사용해서 cart데이터를 가져오는 예제입니다.
  const total = useRecoilValue(cartTotalPrice);
  const [cart, setCart] = useRecoilState<ICartState>(cartState);
  const productsLoadable = useRecoilValueLoadable(productsList);

  if (productsLoadable.state === "hasError") {
    return <div>상품 정보를 가져오는 중에 문제가 발생했습니다. 다시 시도해주세요.</div>;
  }
  const products = productsLoadable.state === "hasValue" ? productsLoadable.contents : [];

  const cartProductIds = Object.keys(cart.items ?? {});
  const cartProducts = products.filter((product) => cartProductIds.includes(product.id.toString()));
  // store/cart.ts를 참고하세요.
  const removeFromCartHandler = (id: number) => {
    setCart(removeFromCart(cart, id));
  };
  const addToCartHandler = (id: number) => {
    setCart(addToCart(cart, id));
  };
  return (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
      <div className="lg:flex justify-between mb-20 w-full">
        <div>
          {cartProducts.map((product) => {
            const count = cart.items?.[product.id].count ?? 1;
            return (
              <div key={product.id} className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
                <Link to={`/product/${product.id}`}>
                  <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
                    <img src={product.image} alt={product.title} className="object-contain w-full h-48" />
                  </figure>
                </Link>

                <div className="card-body px-1 lg:px-12">
                  <h2 className="card-title">
                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                  </h2>
                  <p className="mt-2 mb-4 text-3xl">
                    {toCurrencyFormat(product.price * count)}
                    {"  "}
                    <span className="text-2xl">{`(${toCurrencyFormat(product.price)})`}</span>
                  </p>
                  <div className="card-actions">
                    <div className="btn-group">
                      <button className="btn btn-primary" onClick={() => removeFromCartHandler(product.id)}>
                        -
                      </button>
                      <button className="btn btn-ghost no-animation">{count}</button>
                      <button className="btn btn-primary" onClick={() => addToCartHandler(product.id)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="self-start shrink-0 flex items-center mt-10 mb-20">
          <span className="text-xl md:text-2xl">총 : {toCurrencyFormat(total)}</span>
          <label htmlFor="confirm-modal" className="modal-button btn btn-primary ml-5">
            구매하기
          </label>
        </div>
      </div>
    </div>
  );
};

export default CartList;
