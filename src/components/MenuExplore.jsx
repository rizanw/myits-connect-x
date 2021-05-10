import { h } from "preact";
import { Entity } from "aframe-react";
import { circularPositionFromIndex } from "../utils/calculation";

import baak from "../assets/environtment/360-baak-front.jpg";
import graha from "../assets/environtment/360-graha-front.jpg";
import bundaran from "../assets/environtment/360-bundaran.jpg";
import lingpus from "../assets/environtment/360-lingpus-side.jpg";
import manarul from "../assets/environtment/360-manarul-indoor.jpg";
import fasor from "../assets/environtment/360-fasor-lapangan.jpg";
import tamanAlumni from "../assets/environtment/360-taman-alumni.jpg";
import perpustakan from "../assets/environtment/360-perpustakaan-front.jpg";

const location = [
  baak,
  graha,
  bundaran,
  lingpus,
  manarul,
  fasor,
  tamanAlumni,
  perpustakan,
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
  const createSphare = () => {
    let childrens = [];
    for (let i = 0; i < 8; i++) {
      let pos = circularPositionFromIndex(i, 8);
      childrens.push(
        <Entity position={pos}>
          <Entity
            id={"title-" + i}
            text={{ value: locationName[i], width: 8, align: "center" }}
            look-at="#controller"
            position="0 1.6 0"
            visible="false"
          />
          <Entity
            class="clickable"
            geometry="primitive: sphere; radius: 0.6"
            material={{ src: location[i] }}
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
            animation={{
              property: "rotation",
              to: "0 360 0",
              dur: 5000,
              easing: "linear",
              loop: "true",
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
          />
        </Entity>
      );
    }
    return childrens;
  };
  return <Entity id="menuExplore">{createSphare()}</Entity>;
}
