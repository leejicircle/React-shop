import BreadCrumb from "../components/common/Breadcrumb";
import ItemList from "../components/products/ItemList";
import { MENUS } from "../constants/category";
import { getCategoryName } from "../helpers/helpers";

const Accessory = (): JSX.Element => {
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={MENUS.HOME} crumb={MENUS.ACCESSORY} />
      <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <ItemList categoryKeys={getCategoryName("액세서리")} title={MENUS.ACCESSORY} limit={4} />
      </article>
    </section>
  );
};

export default Accessory;
