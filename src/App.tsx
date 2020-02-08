import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";

import Movies from "./pages/Movies";

const App = () => (
  <Provider store={store}>
    <Movies />
  </Provider>
);

export default App;
