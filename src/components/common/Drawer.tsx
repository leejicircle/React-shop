import { NavLink } from "react-router-dom";

type DrawerProps = {
  Menus: { path: string; label: string }[];
};
const Drawer = ({ Menus }: DrawerProps): JSX.Element => {
  return (
    <div className="drawer-side">
      <label htmlFor="side-menu" className="drawer-overlay"></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        {/* 모바일 메뉴를 노출시켜 보세요. */}
        {Menus.map((menu) => (
          <li key={menu.path}>
            <NavLink
              to={menu.path}
              className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "text-gray-700 dark:text-white")}
            >
              {menu.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drawer;
