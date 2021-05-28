import { h } from "preact";
import { Entity } from "aframe-react";
import { useDispatch } from "react-redux";
import { clickNewsList, clickPostList } from "../store/navigation";

import iconPosts from "../assets/gltf/iconPosts.gltf";
import iconNews from "../assets/gltf/iconNews.gltf";
import { getNews } from "../store/news/actions";

export default function MenuMain() {
  const dispatch = useDispatch();

  return (
    <Entity id="MenuMain">
      <Entity
        class="clickable"
        gltf-model={iconPosts}
        position="-3 1.8 -6"
        rotation="90 90 90"
        animation={{
          property: "object3D.rotation.y",
          from: 60,
          to: 120,
          dir: "alternate",
          loop: true,
          dur: 3000,
          easing: "easeInOutCubic",
          pauseEvents: "mouseenter",
          resumeEvents: "mouseleave",
        }}
        events={{
          click: () => {
            dispatch(clickPostList());
          },
        }}
      />
      <Entity
        class="clickable"
        gltf-model={iconNews}
        position="0 1.8 -6"
        rotation="90 90 90"
        animation={{
          property: "object3D.rotation.y",
          from: 60,
          to: 120,
          dir: "alternate",
          loop: true,
          dur: 3000,
          easing: "easeInOutCubic",
          pauseEvents: "mouseenter",
          resumeEvents: "mouseleave",
        }}
        events={{
          click: () => {
            console.log("get data");
            dispatch(getNews());
            dispatch(clickNewsList());
          },
        }}
      />
    </Entity>
  );
}
