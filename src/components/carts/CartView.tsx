import { Link } from "react-router-dom";
import BreadCrumb from "../common/Breadcrumb";
import Confirm from "../common/Confirm";
import CartList from "./CartList";

import { useRecoilValue } from "recoil";
import { cartState } from "../../store/cart";

const CartView = (): JSX.Element => {
  const cart = useRecoilValue(cartState);
  const isEmpty = !cart.items || Object.keys(cart.items).length === 0;
  return (
    <>
      <BreadCrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        {isEmpty ? (
          <div>
            <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
            <Link to="/" className="btn btn-primary mt-10">
              담으러 가기
            </Link>
          </div>
        ) : (
          <CartList />
        )}

        <div>
          <Confirm />
        </div>

        {/* 구매하기 버튼 등 화면을 구성 해보세요. */}
      </div>
    </>
  );
};

export default CartView;
