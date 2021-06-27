import { h } from "preact";
import { useState } from "preact/hooks";
import { Entity, Scene } from "aframe-react";
import { useSelector } from "react-redux";
import Navigation from "./components/Navigation";
import Lights from "./components/Lights";
import Controllers from "./components/Controllers";
import MenuExplore from "./components/MenuExplore";
import NewsList from "./components/NewsList";
import NewsView from "./components/NewsView";
import PostList from "./components/PostList";
import PostView from "./components/PostView";
import MenuMain from "./components/MenuMain";
import Profile from "./components/Profile";
import SettingScreen from "./components/SettingScreen";
import FriendList from "./components/FriendList";
import Assets from "./components/Assets";
import Notifications from "./components/Notifications";

export default function VRApp() {
  const navigationState = useSelector((state) => state.navigation);
  const systemState = useSelector((state) => state.system);
  const authState = useSelector((state) => state.auth);

  return (
    <Scene stats vr-mode-ui="enabled: false">
      <Assets />
      <Entity
        src={systemState.sky.background}
        primitive="a-sky"
        height="2048"
        width="2048"
        phi-start="-90"
      />
      <Lights />
      <Controllers />
      {navigationState.isExploreActive ? <MenuExplore /> : null}
      {navigationState.isMenuActive ? <MenuMain /> : null}
      {navigationState.isNewsListActive ? <NewsList /> : null}
      {navigationState.isNewsViewActive ? <NewsView /> : null}
      {navigationState.isPostsListActive ? <PostList /> : null}
      {navigationState.isPostsViewActive ? <PostView /> : null}
      {navigationState.isProfileActive ? <Profile /> : null}
      {navigationState.isSettingsActive ? <SettingScreen /> : null}
      {navigationState.isFriendListActive ? <FriendList /> : null}
      {navigationState.isNotificationActive ? <Notifications /> : null}
      {authState.accessToken ? <Navigation /> : null}
    </Scene>
  );
}
