import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { auth } from "./auth";
import { navigation } from "./navigation";
import { news } from "./news";
import { profileNavigation } from "./profile";
import { system } from "./system";

const rootReducer = combineReducers({
  news: news.reducer,
  auth: auth.reducer,
  navigation: navigation.reducer,
  profileNavigation: profileNavigation.reducer,
  system: system.reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
