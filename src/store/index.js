import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { auth } from "./auth";
import { news } from "./news";

const rootReducer = combineReducers({
  news: news.reducer,
  auth: auth.reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
