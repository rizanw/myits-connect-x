import { h } from "preact";
import { Entity } from "aframe-react";
import { circularPositionFromIndex } from "../utils/calculation";
import { useDispatch } from "react-redux";
import { changeBackgroundSky } from "../store/system";

const locationId = [
  "#baakEnvirontment",
  "#grahaEnvirontment",
  "#bundaranItsEnvirontment",
  "#lingpusEnvirontment",
  "#manarulEnvirontment",
  "#fasorEnvirontment",
  "#tamanAlumniEnvirontment",
  "#perpustakaanEnvirontment",
];

const locationName = [
  "BAAK",
  "Graha",
  "Bundaran ITS",
  "Lingpus",
  "Masjid Manarul",
  "Fasor",
  "Taman Alumni",
  "Perpustakaan",
];

export default function MenuExplore() {
  const dispatch = useDispatch();

  const createSphare = () => {
    let childrens = [];
    for (let i = 0; i < 8; i++) {
      let pos = circularPositionFromIndex(i, 8);
      childrens.push(
        <Entity position={pos}>
          <Entity
            id={"title-" + i}
            primitive="a-plane"
            material={{
              color: "#eee",
              opacity: "0.6",
            }}
            position="0 -1.4 0"
            height="0.6"
            width="2.4"
            look-at="#controller"
            visible="false"
          >
            <Entity
              text={{
                value: locationName[i],
                width: 7,
                color: "black",
                align: "center",
              }}
            />
          </Entity>
          <Entity
            class="clickable"
            geometry="primitive: sphere; radius: 0.6"
            material={{ src: locationId[i] }}
            key={i}
            i={i}
            event-set__enter={{
              _event: "mouseenter",
              _target: "#title-" + i,
              visible: "true",
            }}
            event-set__leave={{
              _event: "mouseleave",
              _target: "#title-" + i,
              visible: "false",
            }}
            animation__mouseenter_rotate={{
              property: "rotation",
              to: "0 360 0",
              startEvents: "mouseenter",
              dur: 5000,
              easing: "linear",
              loop: "true",
            }}
            animation__mouseleave_rotate={{
              property: "rotation",
              to: "0 0 0",
              startEvents: "mouseleave",
              dur: 2000,
              easing: "linear",
              loop: "false",
            }}
            animation__mouseenter={{
              property: "scale",
              to: "2 2 2",
              startEvents: "mouseenter",
              dur: 1000,
            }}
            animation__mouseleave={{
              property: "scale",
              to: "1 1 1",
              startEvents: "mouseleave",
              dur: 1000,
            }}
            events={{
              click: () => dispatch(changeBackgroundSky(locationId[i])),
            }}
          />
        </Entity>
      );
    }
    return childrens;
  };
  return <Entity id="menuExplore">{createSphare()}</Entity>;
}
