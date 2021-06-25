import { h } from "preact";
import { Entity } from "aframe-react";
import { useDispatch } from "react-redux";
import {
  clickExplore,
  clickNewsList,
  clickPostList,
} from "../store/navigation";
import { getNews } from "../store/news/actions";
import { getPosts } from "../store/post/actions";

import iconPosts from "../assets/gltf/iconPosts.gltf";
import iconNews from "../assets/gltf/iconNews.gltf";
import iconCompass from "../assets/gltf/iconCompass.gltf";

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
            dispatch(getPosts());
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
      <Entity
        class="clickable"
        gltf-model={iconCompass}
        position="3 1.8 -6"
        rotation="45 90 90"
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
            dispatch(clickExplore());
          },
        }}
      />
    </Entity>
  );
}
