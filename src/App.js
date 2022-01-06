import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from "./Routing";
import { persistor, store } from "./Store";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  )
}
