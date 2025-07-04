import { useParams, Link } from "react-router-dom";
import { useRecoilValueLoadable, useRecoilState } from "recoil";
import { productsList } from "../../store/products";
import { cartState, addToCart } from "../../store/cart";
import { toCurrencyFormat } from "../../helpers/helpers";
import ProductsLoad from "../products/ProductsLoad";
import Error from "../../views/Error";
import Rating from "../common/Rating";
import ProductsDetailLoad from "./ProductsDetailLoad";

const ProductDetail = (): JSX.Element => {
  const { id } = useParams();
  const productsLoadable = useRecoilValueLoadable(productsList);
  const [cart, setCart] = useRecoilState(cartState);

  if (productsLoadable.state === "loading") return <ProductsDetailLoad />;
  if (productsLoadable.state === "hasError") return <Error />;

  const product = productsLoadable.contents.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center text-red-500">해당 상품을 찾을 수 없습니다.</div>;
  }

  const handleAddToCart = () => {
    setCart(addToCart(cart, product.id));
  };

  return (
    <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0 ">
      <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
        <img src={product.image} alt={product.title} className="object-contain w-full h-72" />
      </figure>

      <div className="card-body px-1 lg:px-12">
        <h2 className="card-title">
          {product.title}
          <span className="badge badge-accent ml-2">NEW</span>
        </h2>
        <p>{product.description}</p>
        <Rating rate={product.rating?.rate} count={product.rating?.count} />
        <p className="mt-2 mb-4 text-3xl">{toCurrencyFormat(product.price)}</p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={handleAddToCart}>
            장바구니에 담기
          </button>
          <Link to="/cart" className="btn btn-outline ml-1">
            장바구니로 이동
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
