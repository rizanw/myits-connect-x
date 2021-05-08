import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { news } from "./news";

const rootReducer = combineReducers({
  news: news.reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
