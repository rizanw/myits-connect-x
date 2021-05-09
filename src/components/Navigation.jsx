import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Entity } from "aframe-react";

import navbar from "../assets/gltf/navBar.gltf";
import button from "../assets/gltf/buttonRec.gltf";
import buttonCircle from "../assets/gltf/buttonCir.gltf";
import buttonSmall from "../assets/gltf/buttonRecSmall.gltf";

//icons
import iconMenu from "../assets/icons/menu.png";
import iconCompass from "../assets/icons/compass.png";
import iconProfile from "../assets/icons/avatar.png";
import iconSettings from "../assets/icons/settings.png";
import iconNotification from "../assets/icons/bell.png";

export default function Navigation() {
  const [time, setTime] = useState("");

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
      gltf-model={navbar}
      position="0 -0.25 -2.50"
      rotation="0 90 45"
      scale="0.3 0.3 0.3"
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
      >
        <Entity
          geometry="primitive: plane; height: 1.0; width: 1.0"
          color="white"
          material={{ src: iconSettings, alphaTest: 0.5 }}
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
          position="0 -0.60 -0.10"
          visible="false"
        />
      </Entity>

      <Entity
        id="nav-button-profile"
        gltf-model={buttonCircle}
        class="clickable"
        rotation="90 0 0"
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
      >
        <Entity
          geometry="primitive: plane; height: 1.0; width: 1.0"
          color="white"
          material={{ src: iconProfile, alphaTest: 0.5 }}
          rotation="180 0 -90"
          position="0 0 -0.12"
          scale="0.7 0.7 0.7"
        />
        <Entity
          id="profileTitle"
          text={{ value: "Profil", width: 6, color: "black", align: "center" }}
          rotation="0 180 90"
          position="-0.82 0 -0.10"
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
      >
        <Entity
          geometry="primitive: plane; height: 1.0; width: 1.0"
          color="white"
          material={{ src: iconMenu, alphaTest: 0.5 }}
          rotation="180 0 0"
          position="0 0 -0.12"
          scale="0.7 0.7 0.7"
        />
        <Entity
          id="menuTitle"
          text={{ value: "Menu", width: 6, color: "black", align: "center" }}
          rotation="0 180 90"
          position="-0.82 0 -0.10"
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
      >
        <Entity
          geometry="primitive: plane; height: 1.0; width: 1.0"
          color="white"
          material={{ src: iconCompass, alphaTest: 0.5 }}
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
          position="-0.82 0 -0.10"
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
      >
        <Entity
          geometry="primitive: plane; height: 1.0; width: 1.0"
          color="white"
          material={{ src: iconNotification, alphaTest: 0.5 }}
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
          position="-0.82 0 -0.10"
          visible="false"
        />
      </Entity>
    </Entity>
  );
}
