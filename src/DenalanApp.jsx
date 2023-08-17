import { Provider } from "react-redux";
import { AppRouter } from "./router/AppRouter";
import { store } from "../src/store/store";

export const DenalanApp = () => {
  return (
    <Provider store={store}>
        <AppRouter />
    </Provider>
  );
};
