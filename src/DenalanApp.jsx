import { Provider } from "react-redux";
import { AppRouter } from "./router/AppRouter";
import { store } from "../src/store/store";
import { BrowserRouter } from "react-router-dom";

export const DenalanApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
