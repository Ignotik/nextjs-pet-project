import About from "../../pages/About/About";
import Main from "../../pages/Main/Main";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/forum", element: <div>Форум</div> },
  { path: "/about", element: <About /> },
  { path: "/stocks", element: <div>Акции</div> },
  { path: "/reviews", element: <div>Отзывы</div> },
  { path: "/news", element: <div>Новости</div> },
  { path: "/favorite", element: <div>Избранное</div> },
  { path: "/register", element: <div>Зарегистрироваться</div> },
  { path: "/login", element: <div>Войти</div> },
  { path: "/delivery", element: <div>Оплата и доставка</div> },
  { path: "/contacts", element: <div>Контакты</div> },
  { path: "/office", element: <div>Доставка цветов в офис</div> },
  { path: `/user/${1}`, element: <div>user 1</div> },
  { path: "*", element: <div>ОШИБКА</div> },
];

export default routes;
