import { h } from "preact";
import { Entity } from "aframe-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "preact/hooks";

export default function NewsView() {
  const navigationState = useSelector((state) => state.navigation);
  const [firstPage, setFirstPage] = useState([]);
  const [secondPage, setSecondPage] = useState([]);

  useEffect(() => {
    let str = navigationState.news.content.replace(
      /(<div)(.*?)(<\/div>)/gms,
      ""
    );
    str = str.replace(/<[^>]+>/g, "");
    let chunks = str.split(/\n/);
    chunks = chunks.filter(function (el) {
      return el != "";
    });
    setFirstPage(chunks.slice(0, 6));
    setSecondPage(chunks.slice(6));
  }, []);

  return (
    <Entity>
      <Entity
        geometry="primitive: box; height: 4; width: 4.5; depth: 0.1"
        material={{
          color: "#fbfbf8",
        }}
        position="-2.25 2 -4"
        rotation="0 10 0"
      >
        <Entity htmlembed="ppu:256" position="0 0 0.06">
          <div
            style={{
              width: "1024px",
              height: "870px",
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
              {firstPage.map((item) => (
                <p
                  style={{
                    fontFamily: "Georgia",
                    fontSize: "16pt",
                    textAlign: "justify",
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Entity>
      </Entity>
      <Entity
        geometry="primitive: box; height: 4; width: 4.5; depth: 0.1"
        material={{
          color: "#fbfbf8",
        }}
        position="2.25 2 -4"
        rotation="0 -10 0"
      >
        <Entity htmlembed="ppu:256" position="0 0 0.06">
          <div
            style={{
              width: "1024px",
              height: "870px",
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
              {secondPage.map((item) => (
                <p
                  style={{
                    fontFamily: "Georgia",
                    textAlign: "justify",
                    fontSize: "16pt",
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Entity>
      </Entity>
    </Entity>
  );
}
