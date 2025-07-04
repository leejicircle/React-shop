import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { productsList } from "../../store/products";
import CONSTANTS from "../../constants/constants";

const Search = () => {
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const deferredSearch = useDeferredValue(search);
  const navigate = useNavigate();

  const productListLoadable = useRecoilValueLoadable(productsList);
  const productList = productListLoadable.state === "hasValue" ? productListLoadable.contents : [];

  const searchResultRef = useRef<(HTMLButtonElement | null)[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredProductList = useMemo(() => {
    if (!deferredSearch) return [];
    return productList.filter((product) => product.title.toLowerCase().includes(deferredSearch.toLowerCase()));
  }, [deferredSearch, productList]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [deferredSearch]);

  useEffect(() => {
    if (activeIndex < 0 || activeIndex >= filteredProductList.length) return;

    const element = searchResultRef.current[activeIndex];

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
      element.focus();
    }
  }, [activeIndex, filteredProductList]);

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => {
      if (prev) {
        setSearch("");
        setActiveIndex(-1);
      }
      return !prev;
    });
  };
  const handleSelect = (productId: number) => {
    navigate(`/product/${productId}`);
    setSearch("");
    setActiveIndex(-1);
    setIsSearchOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (!filteredProductList.length) return;
    const { ARROW_DOWN, ARROW_UP, ENTER } = CONSTANTS.KEY;

    if (e.key === ARROW_DOWN) {
      e.preventDefault();
      setActiveIndex((prev) => (prev < filteredProductList.length - 1 ? prev + 1 : prev === -1 ? 0 : prev));
    } else if (e.key === ARROW_UP) {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === ENTER) {
      handleSelect(filteredProductList[activeIndex].id);
    }
  };
  return (
    <div className="dropdown">
      <button
        type="button"
        className="flex sm:hidden w-10 sm:w-auto mx-0 px-0 sm:mx-2 sm:px-2 btn btn-ghost js-search"
        onClick={toggleSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-gray-700 dark:stroke-white"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`
          fixed left-0 top-16 w-full input input-ghost focus:outline-0 rounded-none sm:rounded
          bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:static sm:flex
          transition-all duration-300 ease-in-out transform
          ${isSearchOpen ? "z-10 opacity-100 translate-y-0" : "-z-10 opacity-0 -translate-y-full"}
          sm:!z-10 sm:!opacity-100 sm:!translate-y-0
        `}
      />
      {search && filteredProductList.length > 0 && (
        <ul
          className="!fixed left-0 sm:!absolute sm:top-14 menu flex-nowrap dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-600"
          role="searchList"
        >
          {filteredProductList.map((product, index) => (
            <li role="searchListItem" key={product.id}>
              <button
                className="text-left js-searchedItem"
                ref={(el) => (searchResultRef.current[index] = el)}
                onClick={() => handleSelect(product.id)}
                onKeyDown={handleKeyDown}
              >
                <span className="text-gray-600 dark:text-white line-clamp-2">{product.title}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
