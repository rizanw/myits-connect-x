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
import { randomColor } from "./utils/colors";

export default function VRApp() {
  const navigationState = useSelector((state) => state.navigation);
  const systemState = useSelector((state) => state.system);
  const authState = useSelector((state) => state.auth);

  return (
    <Scene stats loading-screen>
      <Assets />
      <Entity
        src={systemState.sky.background}
        primitive="a-sky"
        height="2048"
        width="2048"
        phi-start="-90"
        visible={systemState.sky.background ? true : false}
      />
      <Entity
        environment={{
          preset: "starry",
          seed: 1,
          lightPosition: { x: 200.0, y: 1.0, z: -50.0 },
          fog: 0.8,
          ground: "hills",
          groundYScale: 5.0,
          groundTexture: "none",
          groundColor: "#242444",
          grid: "1x1",
          active: systemState.sky.background ? false : true,
        }}
      />

      <Entity visible={navigationState.isWelcomeActive}>
        <Entity
          text={{ value: "Selamat datang kembali", width: 6, align: "center" }}
          position="0 2.3 -4"
          animation={{
            property: "text.color",
            direction: "alternate",
            duration: 3000,
            easing: "easeInSine",
            loop: true,
            to: randomColor(),
          }}
        />
        <Entity
          text={{ value: authState.name, width: 5, align: "center" }}
          position="0 2.0 -4.1"
          animation={{
            property: "text.color",
            direction: "alternate",
            duration: 3000,
            easing: "easeInSine",
            loop: true,
            to: randomColor(),
          }}
        />
        <Entity
          text={{
            value: "Silakan ke menu jelajah untuk pergi ke kampus ITS.",
            width: 2,
            align: "center",
          }}
          position="0 0.7 -2"
        />
      </Entity>

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
