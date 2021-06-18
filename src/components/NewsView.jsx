import { h } from "preact";
import { Entity } from "aframe-react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { useEffect } from "preact/hooks";

export default function NewsView() {
  const navigationState = useSelector((state) => state.navigation);

  useEffect(() => {
    const str = navigationState.news.content.replace(/<[^>]+>/g, "");
    const chunks = str.substring(0, 9000)

    console.log(chunks);
  }, []);

  return (
    <Entity>
      <Entity
        primitive="a-box"
        height="4"
        width="4.5"
        depth="0.1"
        position="-2.25 2 -4"
        rotation="0 10 0"
      >
        <Entity htmlembed="ppu:256" position="0 0 0.06">
          <div
            style={{
              width: "1024px",
              height: "768px",
              fontSize: "14pt",
            }}
          >
            <p
              style={{
                marginBottom: "20px",
                textAlign: "right",
                fontSize: "18px",
              }}
            >
              halaman 1
            </p>
            <h1 style={{ marginBottom: "20px" }}>
              {navigationState.news.title}
            </h1>
            <div>
              {parse(navigationState.news.content.replace(/<[^>]+>/g, ""))}
            </div>
          </div>
        </Entity>
      </Entity>
      <Entity
        primitive="a-box"
        height="4"
        width="4.5"
        depth="0.1"
        position="2.25 2 -4"
        rotation="0 -10 0"
      >
        <Entity htmlembed="ppu:256" position="0 0 0.06">
          <div
            style={{
              width: "1024px",
              height: "768px",
              fontSize: "14pt",
            }}
          >
            <p
              style={{
                marginBottom: "20px",
                textAlign: "right",
                fontSize: "18px",
              }}
            >
              halaman 2
            </p>
            <div>
              {parse(navigationState.news.content.replace(/<[^>]+>/g, ""))}
            </div>
          </div>
        </Entity>
      </Entity>
    </Entity>
  );
}
