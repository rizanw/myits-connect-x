import { h } from "preact";
import { useState } from "preact/hooks";
import { Entity, Scene } from "aframe-react";
import Navigation from "./components/Navigation";
import Lights from "./components/Lights";

import sky from "./assets/img/sky.jpg";
import rektorat from "./assets/environtment/360-rektorat-pole.jpg";
import Controllers from "./components/Controllers";
import MenuExplore from "./components/MenuExplore";

export default function VRApp() {
  const [background, setBackground] = useState(rektorat);

  return (
    <Scene vr-mode-ui="enabled: false">
      <Entity
        src={background}
        primitive="a-sky"
        height="2048"
        width="2048"
        phi-start="-90"
      />
      <Lights />
      <Controllers />

      <MenuExplore />
      <Navigation />
    </Scene>
  );
}
