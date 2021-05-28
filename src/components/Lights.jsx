import { Entity } from "aframe-react";
import { h } from "preact";

export default function Lights() {
  return (
    <Entity id="lights">
      <Entity light={{ type: "ambient", color: "#BBB" }} />
      <Entity
        light={{ type: "directional", color: "#EEE", intensity: "0.6" }}
        position="0 -0.4 1"
      />
      <Entity
        light={{ type: "point", intensity: "0.4", distance: 40, decay: 2 }}
        position="0 10 0"
      />
    </Entity>
  );
}
