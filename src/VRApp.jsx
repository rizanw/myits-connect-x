import { h } from "preact";
import { useState } from "preact/hooks";
import { Entity, Scene } from "aframe-react";
import { useSelector } from "react-redux";
import Navigation from "./components/Navigation";
import Lights from "./components/Lights";
import Controllers from "./components/Controllers";
import MenuExplore from "./components/MenuExplore";
import NewsList from "./components/NewsList";

export default function VRApp() {
  const navigationState = useSelector((state) => state.navigation);
  const systemState = useSelector((state) => state.system);

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
      <MenuExplore visible={navigationState.isExploreActive} />
      <NewsList />
      <Navigation />
    </Scene>
  );
}
