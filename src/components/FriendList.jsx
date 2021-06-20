import { h } from "preact";
import { Entity } from "aframe-react";
import { circularFriendPositionFrom } from "../utils/calculation";
import { clickProfile } from "../store/navigation";
import { useDispatch, useSelector } from "react-redux";
import { randomColor } from "../utils/colors";

import avatar from "../assets/icons/avatar-s.png";
import button from "../assets/gltf/buttonRec.gltf";
import iconArrow from "../assets/icons/arrow.png";

export default function FriendList() {
  const dispatch = useDispatch();
  const systemState = useSelector((state) => state.system);

  const createCards = () => {
    let childrens = [];
    for (let i = 0; i < 30; i++) {
      let pos = circularFriendPositionFrom(i, 30);
      childrens.push(
        <Entity
          animation={{
            property: "rotation",
            to: "0 " + 360 + " 0",
            dur: 100000,
            easing: "linear",
            loop: "true",
          }}
        >
          <Entity
            look-at=""
            class="clickable"
            geometry={{
              primitive: "box",
              height: 1,
              width: 2,
              depth: 0.1,
            }}
            material={{
              color: systemState.theme === "colorfun" ? randomColor() : "#fff",
            }}
            position={pos}
            animation__mouseenter={{
              property: "scale",
              to: "1.2 1.2 1.2",
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
              click: () => {
                dispatch(clickProfile());
              },
            }}
          >
            <Entity
              primitive="a-image"
              src={avatar}
              position="-0.7 0 0.06"
              scale="0.5 0.5 0.5"
            />
            <Entity
              text={{
                value: "Ini adalah nama",
                width: 4,
                color: "black",
                align: "left",
                anchor: "left",
              }}
              position="-0.4 0.2 0.05"
            />
            <Entity
              text={{
                value: "Jurusan",
                width: 3,
                color: "black",
                align: "left",
                anchor: "left",
              }}
              position="-0.4 0 0.05"
            />
            <Entity
              text={{
                value: "Angkatan",
                width: 3,
                color: "black",
                align: "left",
                anchor: "left",
              }}
              position="-0.4 -0.2 0.05"
            />
          </Entity>
        </Entity>
      );
    }
    return childrens;
  };

  return (
    <Entity id="friendlist">
      {createCards()}
      <Entity
        id="refresh"
        primitive="a-plane"
        height="0.5"
        width="2"
        material={{
          color: "#aaa",
          opacity: "0.9",
        }}
        position="0 0.2 -3.2"
        rotation="-25 0 0"
      >
        <Entity
          text={{
            value: "30/1000",
            width: 3,
            color: "black",
            align: "center",
          }}
          position="0 0 0.01"
        />
        <Entity
          id="button-left"
          gltf-model={button}
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
            material={{ src: iconArrow, alphaTest: 0.5 }}
            position="0 0 0.15"
            scale="0.45 0.45 0.45"
            rotation="0 0 180"
          />
        </Entity>
        <Entity
          id="button-right"
          gltf-model={button}
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
            material={{ src: iconArrow, alphaTest: 0.5 }}
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
