import { atom, selector } from "recoil";
import { CART_ITEM } from "../constants/category";
import { productsList } from "./products";

export interface ICartInfo {
  readonly id: number;
  readonly count: number;
}

export interface ICartItems {
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly count: number;
  readonly image: string;
}

export interface ICartState {
  readonly items?: Record<string | number, ICartInfo>;
}

/**
 * 카트의 상태는 localStorage 기준으로 초기화 됩니다.
 * 카트의 상태는 새로고침해도 유지되어야 하기 때문입니다.
 */
export const cartState = atom<ICartState>({
  key: "cart",
  default: {},
  effects: [
    ({ setSelf, onSet }) => {
      localStorage.getItem(CART_ITEM) && setSelf(JSON.parse(localStorage.getItem(CART_ITEM) as string));
      onSet((value) => localStorage.setItem(CART_ITEM, JSON.stringify(value)));
    },
  ],
});

/**
 * cartList를 구현 하세요.
 * id, image, count 등을 return합니다.
 */

// addToCart는 구현 해보세요.
export const addToCart = (cart: ICartState, id: number): ICartState => {
  const tempCart = { ...cart, items: { ...cart.items } };

  if (tempCart.items?.[id]) {
    tempCart.items[id] = {
      ...tempCart.items[id],
      count: tempCart.items[id].count + 1,
    };
  } else {
    tempCart.items![id] = { id, count: 1 };
  }

  return tempCart;
};
export const removeFromCart = (cart: ICartState, id: number): ICartState => {
  const tempCart = { ...cart, items: { ...cart.items } };

  if (!tempCart.items?.[id]) {
    return cart;
  }

  if (tempCart.items[id].count === 1) {
    delete tempCart.items[id];
  } else {
    tempCart.items[id] = {
      ...tempCart.items[id],
      count: tempCart.items[id].count - 1,
    };
  }

  return tempCart;
};
// removeFromCart는 참고 하세요.
// export const removeFromCart = (cart: ICartState, id: string) => {
//   const tempCart = { ...cart };
//   if (tempCart[id].count === 1) {
//     delete tempCart[id];
//     return tempCart;
//   } else {
//     return { ...tempCart, [id]: { id: id, count: cart[id].count - 1 } };
//   }
// };

/**
 * 그 외에 화면을 참고하며 필요한 기능들을 구현 하세요.
 */
export const cartTotalPrice = selector<number>({
  key: "cartTotalPrice",
  get: ({ get }) => {
    const cart = get(cartState);
    const products = get(productsList);

    if (!cart.items) return 0;
    if (!products || products.length === 0) return 0;

    return Object.values(cart.items).reduce((acc, item) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) return acc;
      return acc + product.price * item.count;
    }, 0);
  },
});
