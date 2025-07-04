import BreadCrumb from "../components/common/Breadcrumb";
import { useProductBreadcrumb } from "../hooks/useProductBreadcrumb";
import ProductDetail from "./../components/products/ProductsDetail";

const Products = () => {
  const { category, crumb } = useProductBreadcrumb();
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={category} crumb={crumb} />
      <ProductDetail />
    </section>
  );
};

export default Products;
