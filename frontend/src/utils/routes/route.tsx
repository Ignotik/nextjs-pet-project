import About from "../../pages/About/About";
import Contacts from "../../pages/Contacts/Contacts";
import Delivery from "../../pages/Delivery/Delivery";
import Forum from "../../pages/Forum/Forum";
import Main from "../../pages/Main/Main";
import OfficeDelivery from "../../pages/OfficeDelivery/OfficeDelivery";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/forum", element: <Forum /> },
  { path: "/about", element: <About /> },
  { path: "/stocks", element: <div>Акции</div> },
  { path: "/reviews", element: <div>Отзывы</div> },
  { path: "/news", element: <div>Новости</div> },
  { path: "/favorite", element: <div>Избранное</div> },
  { path: "/register", element: <div>Зарегистрироваться</div> },
  { path: "/login", element: <div>Войти</div> },
  { path: "/delivery", element: <Delivery /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/office", element: <OfficeDelivery /> },
  { path: `/user/${1}`, element: <div>user 1</div> },
  { path: "*", element: <div>ОШИБКА</div> },
];

export default routes;
