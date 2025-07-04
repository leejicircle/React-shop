import Slider from "../components/common/Slider";
import ItemList from "./../components/products/ItemList";
import { getCategoryName } from "../helpers/helpers";
import { MENUS } from "../constants/category";
const Index = (): JSX.Element => {
  return (
    <>
      <Slider />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <ItemList categoryKeys={getCategoryName("패션")} title={MENUS.FASHION} limit={4} />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <ItemList categoryKeys={getCategoryName("액세서리")} title={MENUS.ACCESSORY} limit={4} />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <ItemList categoryKeys={getCategoryName("디지털")} title={MENUS.DIGITAL} limit={4} />
      </section>
    </>
  );
};

export default Index;
