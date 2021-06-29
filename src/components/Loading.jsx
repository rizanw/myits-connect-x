import { h } from "preact";
import { Entity } from "aframe-react";
import { randomColor } from "../utils/colors";

export default function Loading() {
  return (
    <Entity position="0 2 -5">
      <Entity
        class="clickable"
        geometry="primitive: box; radius: 0.6"
        animation={{
          property: "rotation",
          to: "0 360 360",
          dur: 4000,
          easing: "linear",
          loop: true,
        }}
        events={{
          click: (e) => {
            e.target.setAttribute("material", { color: randomColor() });
          },
        }}
      />
      <Entity
        position="0 -1 0"
        height="0.4"
        width="1.4"
        primitive="a-plane"
        material={{
          color: "#eee",
          opacity: "0.6",
        }}
      >
        <Entity
          text={{
            value: "Loading ..",
            width: 6,
            color: "black",
            align: "center",
          }}
        />
      </Entity>
    </Entity>
  );
}
