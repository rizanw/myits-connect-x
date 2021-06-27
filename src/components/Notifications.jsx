import { h } from "preact";
import { Entity } from "aframe-react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "preact/hooks";

const NOTIFICATION = [
  {
    content: "blabla",
    time: "20.20.2010",
  },
  {
    content: "blabla",
    time: "21.20.2010",
  },
  {
    content: "blabla",
    time: "22.20.2010",
  },
  {
    content: "blabla",
    time: "23.20.2010",
  },
  {
    content: "blabla",
    time: "24.20.2010",
  },
];

export default function Notifications() {
  const dispatch = useDispatch();
  const systemState = useSelector((state) => state.system);

  var startY = 0.5;
  const contentLength = NOTIFICATION.length;
  const [startIndex, setStartIndex] = useState(0);

  const scrollTo = (num) => {
    const sum = startIndex + num;
    if (sum >= 0 && sum < contentLength) setStartIndex(sum);
    else if (sum >= contentLength) setStartIndex(contentLength - 1);
    else setStartIndex(0);
  };

  const createCards = () => {
    let childrens = [];
    for (let i = startIndex; i < contentLength; i++) {
      let visible =
        startY === 0.5 || startY === -0.2 || startY === -0.9 ? true : false;
      childrens.push(
        <Entity
          class="clickable"
          primitive="a-box"
          height="0.6"
          width="3.4"
          depth="0.05"
          material={{
            color: "#BCBCC0",
          }}
          position={"0 " + startY.toString() + " 0.05"}
          visible={visible}
        >
          <Entity
            text={{
              value: NOTIFICATION[i].content,
              width: 2.5,
              color: "black",
              anchor: "left",
            }}
            position="-1.6 0.1 0.05"
          />
          <Entity
            text={{
              value: NOTIFICATION[i].time,
              width: 2.5,
              color: "black",
              anchor: "left",
            }}
            position="-1.6 -0.1 0.05"
          />
        </Entity>
      );
      startY = parseFloat((startY - 0.7).toFixed(2));
    }
    return childrens;
  };

  return (
    <Entity
      id="notifications"
      primitive="a-box"
      position="0 1.2 -3.2"
      rotation="-15 0 0"
      height="2.6"
      width="3.8"
      depth="0.05"
      material={{
        color: "#EBEBF0",
        opacity: systemState.theme === "colorfun" ? "1.0" : "0.9",
      }}
    >
      <Entity
        text={{
          value: "Notifikasi",
          width: 4,
          color: "black",
          align: "center",
        }}
        position="-1.35 1.05 0.05"
      />

      {createCards()}

      <Entity
        class="clickable"
        primitive="a-box"
        height="0.35"
        width="0.35"
        depth="0.05"
        position={"-2.0 0.2 0.05"}
        events={{
          click: () => {
            scrollTo(-1);
          },
          mouseenter: (e) => {
            e.target.setAttribute("material", { color: "#013880" });
          },
          mouseleave: (e) => {
            e.target.setAttribute("material", { color: "#ffffff" });
          },
        }}
      >
        <Entity
          geometry="primitive: plane; height: 0.15; width: 0.15"
          material={{ src: "#iconArrow", alphaTest: 0.5 }}
          position="0.0 0.0 0.05"
          rotation="0 0 90"
        />
      </Entity>
      <Entity
        class="clickable"
        primitive="a-box"
        height="0.35"
        width="0.35"
        depth="0.05"
        position={"-2.0 -0.2 0.05"}
        events={{
          click: () => {
            scrollTo(1);
          },
          mouseenter: (e) => {
            e.target.setAttribute("material", { color: "#013880" });
          },
          mouseleave: (e) => {
            e.target.setAttribute("material", { color: "#ffffff" });
          },
        }}
      >
        <Entity
          geometry="primitive: plane; height: 0.15; width: 0.15"
          material={{ src: "#iconArrow", alphaTest: 0.5 }}
          position="0.0 0.0 0.05"
          rotation="0 0 -90"
        />
      </Entity>
    </Entity>
  );
}
