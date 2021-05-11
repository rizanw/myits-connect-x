import { h } from "preact";
import { useState } from "preact/hooks";
import { Entity, Scene } from "aframe-react";
import { useSelector } from "react-redux";
import Navigation from "./components/Navigation";
import Lights from "./components/Lights";
import Controllers from "./components/Controllers";
import MenuExplore from "./components/MenuExplore";
import NewsList from "./components/NewsList";
import MenuMain from "./components/MenuMain";

export default function VRApp() {
  const navigationState = useSelector((state) => state.navigation);
  const systemState = useSelector((state) => state.system);

  console.log(navigationState);

  return (
    <Scene vr-mode-ui="enabled: false">
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
      <Navigation />
    </Scene>
  );
}
