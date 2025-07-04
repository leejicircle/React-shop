import { useParams } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { productsList } from "../store/products";
import { Category } from "../constants/category";

export function useProductBreadcrumb() {
  const { id } = useParams();
  const productsLoadable = useRecoilValueLoadable(productsList);

  if (productsLoadable.state !== "hasValue") {
    return { category: "", crumb: "" };
  }

  const product = productsLoadable.contents.find((p) => p.id === Number(id));
  if (!product) {
    return { category: "", crumb: "" };
  }

  const categoryLabel = Category[product.category] || product.category;

  return {
    category: categoryLabel,
    crumb: product.title,
  };
}
