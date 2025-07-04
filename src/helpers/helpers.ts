import { Category, categoryType, MENUS } from "../constants/category";

/*
 * 여러가지 util들을 추가하는 파일입니다.
 * util.ts라고 하셔도 됩니다.
 */
const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const toCurrencyFormat = (value: number) => currencyFormat.format(value);

type MenuKey = keyof typeof MENUS;
export const Menus = (Object.keys(MENUS) as MenuKey[])
  .filter((menu) => menu !== "HOME")
  .map((menu) => ({
    path: `/${menu.toLowerCase()}`,
    label: MENUS[menu],
  }));
export const getCategoryName = (name: categoryType): string[] => {
  return Object.entries(Category)
    .filter(([_, value]) => value === name)
    .map(([key]) => key);
};
