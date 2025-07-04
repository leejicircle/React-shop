import { useRecoilValueLoadable } from "recoil";
import { productsList } from "../../store/products";
import type { IProduct } from "../../store/products";
import ProductsLoad from "./ProductsLoad";
import { toCurrencyFormat } from "../../helpers/helpers";
import Error from "../../views/Error";
import { Link } from "react-router-dom";

interface ItemListProps {
  categoryKeys: string[];
  title: string;
  limit?: number;
}

const ItemList = ({ categoryKeys, title, limit }: ItemListProps): JSX.Element => {
  const productLoadable = useRecoilValueLoadable(productsList);

  const isLoading = productLoadable.state === "loading";
  const isMounted = productLoadable.state === "hasValue";
  const products = isMounted ? (productLoadable.contents as IProduct[]) : [];

  const filterItems = products
    .filter((item) => categoryKeys.includes(item.category))
    .slice(0, limit ?? products.length);

  return (
    <>
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
        {isLoading && <ProductsLoad limit={limit ?? 0} />}
        {filterItems.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
          >
            <figure className="flex h-80 bg-white overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-1/2 h-1/2  transition-transform duration-300 hover:scale-125 object-contain cursor-pointer"
              />
            </figure>
            <div className="card-body bg-gray-100 dark:bg-gray-700">
              <p className="card-title text-base">{item.title}</p>
              <p className="text-base">{toCurrencyFormat(item.price)}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ItemList;
