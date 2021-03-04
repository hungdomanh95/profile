import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./redux/reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
// import translations from "./translate/Translate";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import "./i18next";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={(<div>Loading ~~~</div>)}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
