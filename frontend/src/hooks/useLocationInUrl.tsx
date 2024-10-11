import { useLocation } from "react-router-dom";

export const useLocationInUrl = () => {
  const location = useLocation();
  const path = location.pathname;

  switch (path) {
    case "/":
      return "Главная";
    case "/about":
      return "О нас";
    case "/delivery":
      return "Доставка и оплата";
    case "/office":
      return "Корпоративным клиентам";
    case "/contacts":
      return "Контакты";
    case "/forum":
      return "Форум";
    default:
      return "Страница не найдена";
  }
};
