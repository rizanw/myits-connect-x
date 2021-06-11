import { h } from "preact";
import { Entity } from "aframe-react";
import { useDispatch, useSelector } from "react-redux";
import { circularPositionFrom } from "../utils/calculation";

export default function PostList() {
  const dispatch = useDispatch();
  const systemState = useSelector((state) => state.system);

  const createCards = () => {
    let childrens = [];
    for (let i = 0; i < 9; i++) {
      let pos = circularPositionFrom(i, 9);
      childrens.push(
        <Entity
          animation={{
            property: "rotation",
            to: "0 " + (pos.y === 1 ? "360" : "-360") + " 0",
            dur: 10000 / systemState.orbitalSpeed.toFixed(1),
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
            material={{ color: "#eee" }}
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
          >
            <Entity
              text={{
                value: "Judul konten postingan di sini",
                width: 4,
                color: "black",
                align: "center",
              }}
              position="0.0 -0.75 0.1"
            />
            <Entity
              primitive="a-image"
              position="0 0.25 0.12"
              scale="4 1.5 0"
            />
          </Entity>
        </Entity>
      );
    }
    return childrens;
  };

  return <Entity id="postList">{createCards()}</Entity>;
}
