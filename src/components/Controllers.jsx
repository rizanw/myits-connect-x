import { h } from "preact";
import { Entity, Scene } from "aframe-react";

export default function Controllers() {
  return (
    <Entity id="controller">
      <Entity primitive="a-camera" wasd-controls-enabled={false}>
        <Entity
          primitive="a-cursor"
          cursor={{
            color: "white",
            fuse: false,
            fuseTimeout: 500,
          }}
          material={{
            color: "white",
            shader: "flat",
          }}
          event-set__1="_event: mouseenter; color: black"
          event-set__2="_event: mouseleave; color: white"
          raycaster="objects: .clickable"
        />
      </Entity>
      <Entity
        id="leftHand"
        raycaster="objects: .raycastable"
        laser-controls="hand: left"
        line="color: #0062FF"
      />
      <Entity
        id="rightHand"
        raycaster="objects: .raycastable"
        laser-controls="hand: right"
        line="color: #0062FF"
      />
    </Entity>
  );
}
