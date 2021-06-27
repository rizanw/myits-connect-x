import { h } from "preact";
import { Entity } from "aframe-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth";
import { resetNavigation } from "../store/navigation";
import { clickSettingGeneral, clickSettingTheme } from "../store/navigation";
import {
  decreaseOrbitalSpeed,
  increaseOrbitaSpeed,
  selectLanguage,
  selectTheme,
} from "../store/system";

export default function SettingScreen() {
  const dispatch = useDispatch();
  const navigationState = useSelector((state) => state.navigation);
  const systemState = useSelector((state) => state.system);

  return (
    <Entity
      id="settings"
      primitive="a-plane"
      position="0 1.5 -3.5"
      height="3"
      width="5"
      material={{
        color: "#ddd",
        opacity: "0.9",
      }}
    >
      <Entity
        primitive="a-box"
        position="-1.6 -0.02 0"
        height="3"
        width="1.8"
        depth="0.020"
        material={{
          color: "#fff",
          opacity: "0.9",
        }}
      >
        <Entity
          text={{
            value: "Pengaturan",
            width: 4,
            color: "black",
            align: "center",
          }}
          position="0 1.25 0.01"
        />
        <Entity
          class="clickable"
          primitive="a-box"
          position="0 0.75 0.02"
          height="0.4"
          width="1.6"
          depth="0.020"
          color={navigationState.isSettingGeneralActive ? "#013880" : "#fff"}
          events={{
            click: () => {
              dispatch(clickSettingGeneral());
            },
          }}
        >
          <Entity
            text={{
              value: "Umum",
              width: 4,
              color: navigationState.isSettingGeneralActive ? "white" : "black",
              align: "center",
            }}
            position="0 0 0.01"
          />
        </Entity>
        <Entity
          class="clickable"
          primitive="a-box"
          position="0 0.15 0.02"
          height="0.4"
          width="1.6"
          depth="0.020"
          color={navigationState.isSettingThemeActive ? "#013880" : "#fff"}
          events={{
            click: () => {
              dispatch(clickSettingTheme());
            },
          }}
        >
          <Entity
            text={{
              value: "Tema",
              width: 4,
              color: navigationState.isSettingThemeActive ? "white" : "black",
              align: "center",
            }}
            position="0 0 0.01"
          />
        </Entity>
        <Entity
          class="clickable"
          primitive="a-box"
          position="0 -1.2 0.02"
          height="0.4"
          width="1.6"
          depth="0.020"
          material={{
            color: "#f32013",
            opacity: "0.9",
          }}
          events={{
            click: () => {
              let controls = document.querySelector("a-camera").components[
                "look-controls"
              ];
              controls.pitchObject.rotation.x = 0;
              controls.yawObject.rotation.y = 0;
              dispatch(logout());
              dispatch(resetNavigation());
            },
          }}
        >
          <Entity
            text={{
              value: "Keluar",
              width: 4,
              color: "white",
              align: "center",
            }}
            position="0 0 0.01"
          />
        </Entity>
      </Entity>

      {navigationState.isSettingGeneralActive ? (
        <Entity id="general">
          <Entity
            text={{
              value: "Umum",
              width: 4,
              color: "black",
              align: "center",
            }}
            position="-0.3 1.25 0.01"
          />
          <Entity id="language">
            <Entity
              text={{
                value: "Bahasa",
                width: 3.2,
                color: "black",
                align: "center",
              }}
              position="-0.3 0.85 0.01"
            />
            <Entity
              class="clickable"
              geometry={{
                primitive: "box",
                height: 0.3,
                width: 1.1,
                depth: 0.02,
              }}
              material={{
                color: systemState.language === "id" ? "#013880" : "#fff",
              }}
              position="0.03 0.55 0.02"
              events={{
                click: () => {
                  dispatch(selectLanguage("id"));
                },
              }}
            >
              <Entity
                text={{
                  value: "Bahasa Indonesia",
                  width: 2.5,
                  color: systemState.language === "id" ? "white" : "black",
                  align: "center",
                }}
                position="0 0 0.03"
              />
            </Entity>
            <Entity
              class="clickable"
              geometry={{
                primitive: "box",
                height: 0.3,
                width: 1.1,
                depth: 0.02,
              }}
              material={{
                color: systemState.language === "en" ? "#013880" : "#fff",
              }}
              position="1.13 0.55 0.02"
              events={{
                click: () => {
                  dispatch(selectLanguage("en"));
                },
              }}
            >
              <Entity
                text={{
                  value: "English",
                  width: 2.5,
                  color: systemState.language === "en" ? "white" : "black",
                  align: "center",
                }}
                position="0 0 0.03"
              />
            </Entity>
          </Entity>

          <Entity id="orbitalspeed" position="0 0 0">
            <Entity
              text={{
                value: "News/Post Kecepatan Orbit",
                width: 3.2,
                color: "black",
                align: "left",
                anchor: "left",
              }}
              position="-0.5 0 0.01"
            />
            <Entity
              class="clickable"
              geometry={{
                primitive: "box",
                height: 0.3,
                width: 0.3,
                depth: 0.01,
              }}
              material={{
                color: "#fff",
              }}
              position="-0.3 -0.3 0.02"
              event-set__mouseenter={{
                material: {
                  color: "#013880",
                },
              }}
              event-set__mouseleave="material.color: #fff"
              events={{
                click: () => {
                  dispatch(decreaseOrbitalSpeed());
                },
              }}
            >
              <Entity
                geometry="primitive: plane; height: 1.0; width: 1.0"
                material={{ src: "#iconArrow", alphaTest: 0.5 }}
                position="0 0 0.01"
                rotation="0 0 180"
                scale="0.2 0.2 0.2"
              />
            </Entity>
            <Entity
              text={{
                value: systemState.orbitalSpeed.toFixed(1) + "x",
                width: 4,
                color: "black",
                align: "center",
              }}
              position="0.15 -0.3 0.01"
            />
            <Entity
              class="clickable"
              geometry={{
                primitive: "box",
                height: 0.3,
                width: 0.3,
                depth: 0.01,
              }}
              material={{
                color: "#fff",
              }}
              position="0.6 -0.3 0.02"
              event-set__mouseenter={{
                material: {
                  color: "#013880",
                },
              }}
              event-set__mouseleave="material.color: #fff"
              events={{
                click: () => {
                  dispatch(increaseOrbitaSpeed());
                },
              }}
            >
              <Entity
                geometry="primitive: plane; height: 1.0; width: 1.0"
                material={{ src: "#iconArrow", alphaTest: 0.5 }}
                position="0 0 0.01"
                scale="0.2 0.2 0.2"
              />
            </Entity>
          </Entity>
        </Entity>
      ) : null}

      {navigationState.isSettingThemeActive ? (
        <Entity id="theme">
          <Entity
            text={{
              value: "Tema",
              width: 4,
              color: "black",
              align: "center",
            }}
            position="-0.3 1.25 0.01"
          />
          <Entity id="its">
            <Entity
              class="clickable"
              geometry={{
                primitive: "box",
                height: 0.6,
                width: 1.0,
                depth: 0.02,
              }}
              position="0 0.65 0.02"
              material={{
                color: "#013880",
                opacity: "0.9",
              }}
              event-set__enter={{
                _event: "mouseenter",
                _target: "#itsTitle",
                scale: "1.5 1.5 1.5",
              }}
              event-set__leave={{
                _event: "mouseleave",
                _target: "#itsTitle",
                scale: "1 1 1",
              }}
              events={{
                click: () => {
                  dispatch(selectTheme("its"));
                },
              }}
            >
              <Entity
                id="itsTitle"
                text={{
                  value: "ITS",
                  width: 3,
                  color: "white",
                  align: "center",
                }}
                position="0 0 0.01"
              />
              {systemState.theme === "its" ? (
                <Entity
                  geometry={{
                    primitive: "box",
                    height: 0.05,
                    width: 1.0,
                    depth: 0.02,
                  }}
                  material={{
                    color: "#013880",
                    opacity: "0.9",
                  }}
                  position="0 -0.35 0"
                >
                  <Entity
                    text={{
                      value: "Terpilih",
                      width: 2,
                      color: "black",
                      align: "center",
                    }}
                    position="-0.36 -0.1 0.03"
                  />
                </Entity>
              ) : null}
            </Entity>
          </Entity>
          <Entity id="colorfun">
            <Entity
              class="clickable"
              geometry={{
                primitive: "box",
                height: 0.6,
                width: 1.0,
                depth: 0.02,
              }}
              position="1.2 0.65 0.02"
              event-set__enter={{
                _event: "mouseenter",
                _target: "#colorTitle",
                scale: "1.5 1.5 1.5",
              }}
              event-set__leave={{
                _event: "mouseleave",
                _target: "#colorTitle",
                scale: "1 1 1",
              }}
              events={{
                click: () => {
                  dispatch(selectTheme("colorfun"));
                },
              }}
            >
              <Entity
                id="colorTitle"
                text={{
                  value: "Color Fun",
                  width: 3,
                  color: "black",
                  align: "center",
                }}
                position="0 0 0.03"
              />
              {systemState.theme === "colorfun" ? (
                <Entity
                  geometry={{
                    primitive: "box",
                    height: 0.05,
                    width: 1.0,
                    depth: 0.02,
                  }}
                  material={{
                    color: "#013880",
                    opacity: "0.9",
                  }}
                  position="0 -0.35 0"
                >
                  <Entity
                    text={{
                      value: "Terpilih",
                      width: 2,
                      color: "black",
                      align: "center",
                    }}
                    position="-0.36 -0.1 0.03"
                  />
                </Entity>
              ) : null}
            </Entity>
          </Entity>
        </Entity>
      ) : null}
    </Entity>
  );
}
