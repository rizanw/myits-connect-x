import { h } from "preact";
import { Entity } from "aframe-react";
import { useSelector } from "react-redux";
import { randomColor } from "../utils/colors";

import button from "../assets/gltf/buttonRec.gltf";

export default function NewsView() {
  const newsState = useSelector((state) => state.news);
  const systemState = useSelector((state) => state.system);

  const createText = () => {
    let str = newsState.post.content.replace(/(<div)(.*?)(<\/div>)/gms, "");
    str = str.replace(/<[^>]+>/g, "");
    let chunks = str.split(/\n/);
    chunks = chunks.filter(function (el) {
      return el != "";
    });
    let childrens = [];
    let startY = 0.2;
    for (let i = 0; i < chunks.length; i++) {
      childrens.push(
        <Entity
          text={{
            value: chunks[i],
            color: "black",
            width: 4,
            wrapCount: 56,
            anchor: "left",
            baseline: "top",
          }}
          position={"-2.1 " + startY + " 0.05"}
        />
      );
      startY -= 1;
    }
    return childrens;
  };

  const scrollTo = (num) => {
    const panel = document.getElementById("read-news");
    const sumY = panel.getAttribute("position").y + num;
    const sumZ = panel.getAttribute("position").z - 0.27 * num;
    let str = newsState.post.content
      .replace(/(<div)(.*?)(<\/div>)/gms, "")
      .replace(/<[^>]+>/g, "");
    let contentLength = Math.ceil(str.split(/\n/).length / 1.5);
    console.log(str.split(/\n/).length);
    console.log(panel.getAttribute("position"));

    if (sumY <= 0 && sumY < contentLength)
      panel.setAttribute("position", "0 0 -3.5");
    else if (sumY > contentLength)
      panel.setAttribute("position", "0 " + (sumY - 1) + " " + (sumZ + 0.27));
    else panel.setAttribute("position", "0 " + sumY + " " + sumZ);
  };

  return (
    <Entity>
      <Entity
        id="read-news"
        primitive="a-box"
        height="6"
        width="4.5"
        depth="0.05"
        material={{
          color: "#EBEBF0",
          opacity: systemState.theme === "colorfun" ? "1.0" : "0.9",
        }}
        position="0 0 -3.5"
        rotation="-15 0 0"
      >
        <Entity
          text={{
            value: newsState.post.date,
            color: "black",
            width: 2,
            anchor: "left",
          }}
          position="-2.1 2.7 0.05"
        />
        <Entity
          text={{
            value: newsState.post.title,
            color: "black",
            width: 3.7,
            wrapCount: 30,
            anchor: "left",
          }}
          position="-2.1 2.3 0.05"
        />

        <Entity
          primitive="a-image"
          position="0 1.2 0.03"
          scale="4 1.5 0"
          src={newsState.post.thumbnail}
        />
        {createText()}

        <Entity
          id="extended"
          primitive="a-box"
          height="15"
          width="4.5"
          depth="0.05"
          material={{
            color: "#EBEBF0",
            opacity: systemState.theme === "colorfun" ? "1.0" : "0.9",
          }}
          position="0 -10 0"
        />
      </Entity>

      <Entity
        primitive="a-plane"
        height="0.5"
        width="1"
        material={{
          color: systemState.theme === "colorfun" ? randomColor() : "#BCBCC0",
          opacity: systemState.theme === "colorfun" ? "1.0" : "0.9",
        }}
        position="0 0.2 -3"
        rotation="-25 0 0"
      >
        <Entity
          class="clickable"
          gltf-model={button}
          scale="0.25 0.25 0.25"
          position="0.2 0.0 0.05"
          events={{
            click: () => {
              scrollTo(1);
            },
          }}
        >
          <Entity
            geometry="primitive: plane; height: 1.0; width: 1.0"
            material={{ src: "#iconArrow", alphaTest: 0.5 }}
            position="0 0 0.15"
            rotation="0 0 -90"
            scale="0.45 0.45 0.45"
          />
        </Entity>
        <Entity
          class="clickable"
          gltf-model={button}
          scale="0.25 0.25 0.25"
          position="-0.2 0 0.05"
          events={{
            click: () => {
              scrollTo(-1);
            },
          }}
        >
          <Entity
            geometry="primitive: plane; height: 1.0; width: 1.0"
            material={{ src: "#iconArrow", alphaTest: 0.5 }}
            position="0 0 0.15"
            rotation="0 0 90"
            scale="0.45 0.45 0.45"
          />
        </Entity>
      </Entity>
    </Entity>
  );
}
