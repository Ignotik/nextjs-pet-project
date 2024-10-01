import { useLocation } from "react-router-dom";

export const useLocationInUrl = () => {
  const location = useLocation();
  const path = location.pathname;

  switch (path) {
    case "/":
      return "Главная";
    case "/about":
      return "О нас";

    default:
      return "Страница не найдена";
  }
};
