import { BrowserRouter } from "react-router-dom";
import AppRoute from "./components/AppRoutes/AppRoute";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <AppRoute />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
