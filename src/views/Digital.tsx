import BreadCrumb from "../components/common/Breadcrumb";
import ItemList from "../components/products/ItemList";
import { MENUS } from "../constants/category";
import { getCategoryName } from "../helpers/helpers";

const Digital = () => {
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={MENUS.HOME} crumb={MENUS.DIGITAL} />
      <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <ItemList categoryKeys={getCategoryName("디지털")} title={MENUS.DIGITAL} limit={8} />
      </article>
    </section>
  );
};

export default Digital;
