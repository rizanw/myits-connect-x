import { h } from "preact";
import { Entity } from "aframe-react";
import { circularPositionFrom } from "../utils/calculation";

export default function NewsList() {
  const createCards = () => {
    let childrens = [];
    for (let i = 0; i < 5; i++) {
      let pos = circularPositionFrom(i, 5);
      childrens.push(
        <Entity
          animation={{
            property: "rotation",
            to: "0 " + (pos.y === 1 ? "360" : "-360") + " 0",
            dur: 10000,
            easing: "linear",
            loop: "true",
          }}
        >
          <Entity
            geometry={{
              primitive: "box",
              height: 2,
              width: 4,
              depth: 0.2,
            }}
            position={pos}
            material={{ color: "#111" }}
            look-at=""
          />
        </Entity>
      );
    }
    return childrens;
  };

  return (
    <Entity id="menuExplore">
      {createCards()}
    </Entity>
  );
}
