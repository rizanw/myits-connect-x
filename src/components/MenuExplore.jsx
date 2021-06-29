import { h } from "preact";
import { useState } from "preact/hooks";
import { Entity } from "aframe-react";
import { circularPositionFromIndex } from "../utils/calculation";
import { useDispatch } from "react-redux";
import { changeBackgroundSky } from "../store/system";

import buttonGLTF from "../assets/gltf/buttonRec.gltf";

const locationId = [
  "#baakEnvirontment",
  "#grahaEnvirontment",
  "#bundaranItsEnvirontment",
  "#lingpusEnvirontment",
  "#manarulEnvirontment",
  "#fasorEnvirontment",
  "#tamanAlumniEnvirontment",
  "#perpustakaanEnvirontment",
  "#rektoratEnvirontment",
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
  "Rektorat",
];

export default function MenuExplore() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const createSphare = () => {
    let childrens = [];
    let iPos = 0;
    for (let i = page - 1; i < 3 * page; i++) {
      let pos = circularPositionFromIndex(iPos, 3);
      iPos === 2 ? (iPos = 0) : iPos++;
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
  return (
    <Entity id="menuExplore">
      {createSphare()}
      <Entity
        id="refresh"
        primitive="a-plane"
        height="0.4"
        width="1.25"
        material={{
          color: "#EBEBF0",
          opacity: "0.9",
        }}
        position="0 0.65 -2.1"
        rotation="-25 0 0"
      >
        <Entity
          text={{
            value: page * 3 + " / " + locationId.length,
            width: 3,
            color: "black",
            align: "center",
          }}
          position="0 0 0.01"
        />
        <Entity
          id="button-left"
          gltf-model={buttonGLTF}
          class="clickable"
          position="-0.6 0 0"
          scale="0.2 0.2 0.2"
          events={{
            click: () => {
              if (page > 1) {
                setPage(page - 1);
              }
            },
          }}
        >
          <Entity
            geometry="primitive: plane; height: 1.0; width: 1.0"
            color="white"
            material={{ src: "#iconArrow", alphaTest: 0.5 }}
            position="0 0 0.15"
            scale="0.45 0.45 0.45"
            rotation="0 0 180"
          />
        </Entity>
        <Entity
          id="button-right"
          gltf-model={buttonGLTF}
          class="clickable"
          position="0.6 0 0"
          scale="0.2 0.2 0.2"
          events={{
            click: () => {
              if (page < locationId.length / 3) {
                setPage(page + 1);
              }
            },
          }}
        >
          <Entity
            geometry="primitive: plane; height: 1.0; width: 1.0"
            color="white"
            material={{ src: "#iconArrow", alphaTest: 0.5 }}
            position="0 0 0.15"
            scale="0.45 0.45 0.45"
          />
          <Entity
            id="settingsTitle"
            text={{
              value: "Pengaturan",
              width: 6,
              color: "black",
              align: "center",
            }}
            rotation="0 180 0"
            position="0 -0.60 -0.10"
            visible="false"
          />
        </Entity>
      </Entity>
    </Entity>
  );
}
