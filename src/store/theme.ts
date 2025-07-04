import { atom } from "recoil";

export const themeState = atom<"light" | "dark">({
  key: "themeState",
  default: (localStorage.getItem("theme") as "light" | "dark") || "light",
  effects: [
    ({ onSet }) => {
      onSet((newTheme) => {
        localStorage.setItem("theme", newTheme);
      });
    },
  ],
});
