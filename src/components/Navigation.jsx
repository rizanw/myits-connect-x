import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { Entity } from "aframe-react";
import {
  clickExplore,
  resetNavigation,
  clickMenu,
  clickProfile,
  clickSettingScreen,
  clickNotification,
} from "../store/navigation";
import { getProfile } from "../store/profile/actions";

import navbar from "../assets/gltf/navBar.gltf";
import button from "../assets/gltf/buttonRec.gltf";
import buttonSmall from "../assets/gltf/buttonRecSmall.gltf";
import { randomColor } from "../utils/colors";

export default function Navigation() {
  const [time, setTime] = useState("");
  const dispatch = useDispatch();
  const navigationState = useSelector((state) => state.navigation);
  const authState = useSelector((state) => state.auth);
  const systemState = useSelector((state) => state.system);

  useEffect(() => {
    setInterval(clock, 1000);
  }, [time]);

  const clock = () => {
    const date = new Date();
    const h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const m =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    setTime(h + ":" + m);
  };

  return (
    <Entity
      id="navigation"
      gltf-model={navbar}
      position="0 0.35 -1.6"
      rotation="0 90 45"
      scale="0.22 0.22 0.22"
      navigation
    >
      <Entity
        text={{
          value: time,
          width: 8,
          color: "black",
          align: "center",
        }}
        position="0.5 0.120 4"
        rotation="-90.000 -90.000 0"
      />

      <Entity
        id="nav-button-settings"
        gltf-model={buttonSmall}
        class="clickable"
        rotation="90 90 0"
        position="-0.250 0.120 4"
        event-set__enter={{
          _event: "mouseenter",
          _target: "#settingsTitle",
          visible: "true",
        }}
        event-set__leave={{
          _event: "mouseleave",
          _target: "#settingsTitle",
          visible: "false",
        }}
        events={{
          click: () => {
            navigationState.isSettingsActive
              ? dispatch(resetNavigation())
              : dispatch(clickSettingScreen());
          },
        }}
      >
        <Entity
          geometry="primitive: plane; height: 1.0; width: 1.0"
          color="white"
          material={{ src: "#iconSettings", alphaTest: 0.5 }}
          rotation="180 0 0"
          position="0 0 -0.12"
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
          position="0 -0.60 0.0"
          visible="false"
        />
      </Entity>

      <Entity
        id="nav-button-profile"
        class="clickable"
        geometry={{
          primitive: "cylinder",
          height: "0.3",
          radius: "0.7",
        }}
        material={{
          color: systemState.theme === "colorfun" ? randomColor() : "#fff",
        }}
        position="0 0.120 2"
        event-set__enter={{
          _event: "mouseenter",
          _target: "#profileTitle",
          visible: "true",
        }}
        event-set__leave={{
          _event: "mouseleave",
          _target: "#profileTitle",
          visible: "false",
        }}
        events={{
          click: () => {
            if (navigationState.isProfileActive) dispatch(resetNavigation());
            else {
              dispatch(getProfile(authState.id));
              dispatch(clickProfile());
            }
          },
        }}
      >
        <Entity
          geometry="primitive: plane; height: 1.0; width: 1.0"
          color="white"
          material={{ src: "#iconProfile", alphaTest: 0.5 }}
          position="0 0.16 0"
          rotation="-90 0.0 -90"
          scale="0.65 0.65 0.65"
        />
        <Entity
          id="profileTitle"
          text={{ value: "Profil", width: 6, color: "black", align: "center" }}
          rotation="-90 0.0 -90"
          position="-0.82 0.0 0.0"
          visible="false"
        />
      </Entity>

      <Entity
        id="nav-button-menu"
        gltf-model={button}
        class="clickable"
        rotation="90 0 0"
        position="0 0.120 0"
        event-set__enter={{
          _event: "mouseenter",
          _target: "#menuTitle",
          visible: "true",
        }}
        event-set__leave={{
          _event: "mouseleave",
          _target: "#menuTitle",
          visible: "false",
        }}
        events={{
          click: () => {
            navigationState.isMenuActive
              ? dispatch(resetNavigation())
              : dispatch(clickMenu());
          },
        }}
      >
        <Entity
          geometry="primitive: plane; height: 1.0; width: 1.0"
          color="white"
          material={{ src: "#iconMenu", alphaTest: 0.5 }}
          rotation="180 0 0"
          position="0 0 -0.12"
          scale="0.7 0.7 0.7"
        />
        <Entity
          id="menuTitle"
          text={{ value: "Menu", width: 6, color: "black", align: "center" }}
          rotation="0 180 90"
          position="-0.82 0 0.0"
          visible="false"
        />
      </Entity>

      <Entity
        id="nav-button-explore"
        gltf-model={button}
        class="clickable"
        rotation="90 0 0"
        position="0 0.120 -2"
        event-set__enter={{
          _event: "mouseenter",
          _target: "#exploreTitle",
          visible: "true",
        }}
        event-set__leave={{
          _event: "mouseleave",
          _target: "#exploreTitle",
          visible: "false",
        }}
        events={{
          click: () => {
            navigationState.isExploreActive
              ? dispatch(resetNavigation())
              : dispatch(clickExplore());
          },
        }}
      >
        <Entity
          geometry="primitive: plane; height: 1.0; width: 1.0"
          color="white"
          material={{ src: "#iconCompass", alphaTest: 0.5 }}
          rotation="180 0 0"
          position="0 0 -0.12"
          scale="0.7 0.7 0.7"
        />
        <Entity
          id="exploreTitle"
          text={{
            value: "Jelajah",
            width: 6,
            color: "black",
            align: "center",
          }}
          rotation="0 180 90"
          position="-0.82 0 0.0"
          visible="false"
        />
      </Entity>

      <Entity
        id="nav-button-notification"
        gltf-model={button}
        class="clickable"
        rotation="90 0 0"
        position="0 0.120 -4"
        event-set__enter={{
          _event: "mouseenter",
          _target: "#notificationTitle",
          visible: "true",
        }}
        event-set__leave={{
          _event: "mouseleave",
          _target: "#notificationTitle",
          visible: "false",
        }}
        events={{
          click: () => {
            navigationState.isNotificationActive
              ? dispatch(resetNavigation())
              : dispatch(clickNotification());
          },
        }}
      >
        <Entity
          geometry="primitive: plane; height: 1.0; width: 1.0"
          color="white"
          material={{ src: "#iconNotification", alphaTest: 0.5 }}
          rotation="180 0 -90"
          position="0 0 -0.12"
          scale="0.7 0.7 0.7"
        />
        <Entity
          id="notificationTitle"
          text={{
            value: "Notifikasi",
            width: 6,
            color: "black",
            align: "center",
          }}
          rotation="0 180 90"
          position="-0.82 0 0.0"
          visible="false"
        />
      </Entity>
    </Entity>
  );
}
