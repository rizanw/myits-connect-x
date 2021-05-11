import { h } from "preact";
import { Entity } from "aframe-react";
import { useDispatch, useSelector } from "react-redux";
import { circularPositionFrom } from "../utils/calculation";

export default function PostList() {
  const createCards = () => {
    let childrens = [];
    for (let i = 0; i < 9; i++) {
      let pos = circularPositionFrom(i, 9);
      childrens.push(
        <Entity
          animation={{
            property: "rotation",
            to: "0 " + (pos.y === 1 ? "360" : "-360") + " 0",
            dur: 10000,
            easing: "linear",
            loop: "true",
            pauseEvents: "mouseenter",
            resumeEvents: "mouseleave",
          }}
        >
          <Entity
            class="clickable"
            geometry={{
              primitive: "box",
              height: 2,
              width: 4,
              depth: 0.2,
            }}
            position={pos}
            material={{ color: "#111" }}
            look-at=""
            animation__mouseenter={{
              property: "scale",
              to: "1.4 1.4 1.4",
              startEvents: "mouseenter",
              dur: 1000,
            }}
            animation__mouseleave={{
              property: "scale",
              to: "1 1 1",
              startEvents: "mouseleave",
              dur: 1000,
            }}
          ></Entity>
        </Entity>
      );
    }
    return childrens;
  };

  return <Entity id="postList">{createCards()}</Entity>;
}
