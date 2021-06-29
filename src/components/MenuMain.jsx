import { h } from "preact";
import { Entity } from "aframe-react";
import { useDispatch } from "react-redux";
import {
  clickExplore,
  clickNewsList,
  clickPostList,
} from "../store/navigation";
import { getPosts } from "../store/post/actions";

export default function MenuMain() {
  const dispatch = useDispatch();

  return (
    <Entity id="MenuMain">
      <Entity
        class="clickable"
        gltf-model="#iconPostsGLTF"
        position="-3 2 -6"
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
        gltf-model="#iconNewsGLTF"
        position="0 2 -6"
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
            dispatch(clickNewsList());
          },
        }}
      />
      <Entity
        class="clickable"
        gltf-model="#iconCompassGLTF"
        position="3 2 -6"
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
