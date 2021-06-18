import { h } from "preact";
import { useEffect } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { Entity, Scene } from "aframe-react";
import { circularPositionFrom } from "../utils/calculation";
import { getNews } from "../store/news/actions";
import Loading from "./Loading";
import { clickNewsDetail } from "../store/navigation";

export default function NewsList() {
  const dispatch = useDispatch();
  const newsState = useSelector((state) => state.news);
  const systemState = useSelector((state) => state.system);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  console.log(newsState.posts);

  const createCards = () => {
    let news = newsState.posts;
    let childrens = [];
    for (let i = 0; i < 5; i++) {
      let pos = circularPositionFrom(i, 5);
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
            material={{ color: "#111" }}
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
            events={{
              click: () => {
                dispatch(
                  clickNewsDetail({
                    title: news[i].title,
                    content: news[i].content,
                  })
                );
              },
            }}
          >
            <Entity
              text={{
                value: news[i].title,
                width: 4,
                color: "white",
                align: "center",
              }}
              position="0.0 -0.75 0.1"
            />
            <Entity
              primitive="a-image"
              position="0 0.25 0.12"
              scale="4 1.5 0"
              src={news[i].thumbnail}
            />
          </Entity>
        </Entity>
      );
    }
    return childrens;
  };

  if (newsState.posts.length)
    return <Entity id="newsList">{createCards()}</Entity>;
  else return <Loading />;
}
