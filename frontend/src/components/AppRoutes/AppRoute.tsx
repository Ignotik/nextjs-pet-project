import { useRoutes } from "react-router-dom";
import routes from "../../utils/routes/route";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Address from "../layout/Adress/Address";

function AppRoute() {
  const routing = useRoutes(routes);
  return (
    <>
      <Header />
      {routing}
      <Address />
      <Footer />
    </>
  );
}

export default AppRoute;
