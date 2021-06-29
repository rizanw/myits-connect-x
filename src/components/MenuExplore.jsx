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
  return (
    <Entity id="menuExplore">
      {createSphare()}
      <Entity
        id="refresh"
        primitive="a-plane"
        height="0.5"
        width="2"
        material={{
          color: "#EBEBF0",
          opacity: "0.9",
        }}
        position="0 0.2 -3.2"
        rotation="-25 0 0"
      >
        <Entity
          text={{
            value: "",
            width: 3,
            color: "black",
            align: "center",
          }}
          position="0 0 0.01"
        />
        <Entity
          id="button-left"
          gltf-model={"#buttonGLTF"}
          class="clickable"
          position="-0.7 0 0"
          scale="0.3 0.3 0.3"
          events={{
            click: () => {},
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
          gltf-model={"#buttonGLTF"}
          class="clickable"
          position="0.7 0 0"
          scale="0.3 0.3 0.3"
          events={{
            click: () => {},
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
