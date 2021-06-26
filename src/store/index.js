import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { auth } from "./auth";
import { navigation } from "./navigation";
import { news } from "./news";
import { post } from "./post";
import { profile } from "./profile";
import { system } from "./system";

const rootReducer = combineReducers({
  news: news.reducer,
  post: post.reducer,
  auth: auth.reducer,
  navigation: navigation.reducer,
  profile: profile.reducer,
  system: system.reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
