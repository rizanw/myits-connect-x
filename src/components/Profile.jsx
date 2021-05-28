import { h } from "preact";
import { Entity, Scene } from "aframe-react";

export default function Profile() {
  return (
    <Entity id="profile">
      <Entity
        geometry={{
          primitive: "box",
          height: 4.6,
          width: 5,
          depth: 0.2,
        }}
        position="2.6 1.8 -5"
        rotation="0 -15 0"
      ></Entity>
      <Entity
        geometry={{
          primitive: "box",
          height: 4.6,
          width: 5,
          depth: 0.2,
        }}
        position="-2.6 1.8 -5"
        rotation="0 15 0"
      >
        <Entity geometry={{ primitive: "cylinder" }} rotation="90 0 0" />
      </Entity>
    </Entity>
  );
}
