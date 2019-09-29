import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootInitialState, rootReducer } from "./reducers";
import { epics } from "./epics";

const logger = createLogger({
  collapsed: true,
  predicate: (getState: Function, action: Object) => {
    if (action.type && action.type.startsWith("@@redux-form")) {
      return false;
    } else {
      return true;
    }
  }
});

const epicMiddlewares = createEpicMiddleware();

export const store = createStore(
  rootReducer,
  rootInitialState,
  composeWithDevTools(applyMiddleware(epicMiddlewares, logger))
);

epicMiddlewares.run(epics);
