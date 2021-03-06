import { h } from "preact";
import { Entity, Scene } from "aframe-react";

const geometry = {
  primitive: "ring",
  radiusInner: 0.006,
  radiusOuter: 0.01,
};

const material = {
  color: "black",
  shader: "flat",
  opacity: 0.9,
  transparent: true,
};

const cursor = {
  fuse: false,
  fuseTimeout: 500,
};

export default function Controllers() {
  return (
    <Entity id="controller">
      <Entity id="user" primitive="a-camera" wasd-controls-enabled={false}>
        <Entity
          primitive="a-cursor"
          cursor={cursor}
          geometry={geometry}
          material={material}
          event-set__enter={{
            _event: "mouseenter",
            scale: { x: 1.4, y: 1.4, z: 1.4 },
            color: "black",
          }}
          event-set__leave={{
            _event: "mouseleave",
            scale: { x: 1, y: 1, z: 1 },
            color: "black",
          }}
          animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 200; from: 0.1 0.1 0.1; to: 1 1 1"
          raycaster="objects: .clickable"
        />
      </Entity>
      <Entity
        id="leftHand"
        raycaster="objects: .clickable"
        laser-controls="hand: left"
        line="color: #0062FF"
      />
      <Entity
        id="rightHand"
        raycaster="objects: .clickable"
        laser-controls="hand: right"
        line="color: #0062FF"
      />
    </Entity>
  );
}
