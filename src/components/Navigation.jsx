import { h } from "preact";
import { Entity } from "aframe-react";

import navbar from "../assets/gltf/navBar.gltf";
import button from "../assets/gltf/buttonRec.gltf";

export default function Navigation() {
  return (
    <Entity
      gltf-model={navbar}
      position="0 -0.25 -2.50"
      rotation="0 90 45"
      scale="0.3 0.3 0.3"
      navigation
    >
      <a-mixin id="nav-button" gltf-model={button} rotation="0 90 0" />
      <a-mixin
        id="icon"
        geometry="primitive: plane; height: 1.0; width: 1.0"
        color="white"
        material="color: white;"
      />

      <Entity primitive="a-mixin" />

      <Entity gltf-model={button} class="clickable" />
    </Entity>
  );
}
