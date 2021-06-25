import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { auth } from "./auth";
import { navigation } from "./navigation";
import { news } from "./news";
import { post } from "./post";
import { profileNavigation } from "./profile";
import { system } from "./system";
import { setting } from "./setting";

const rootReducer = combineReducers({
  news: news.reducer,
  post: post.reducer,
  auth: auth.reducer,
  navigation: navigation.reducer,
  profileNavigation: profileNavigation.reducer,
  system: system.reducer,
  setting: setting.reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
