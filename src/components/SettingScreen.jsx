import { h } from "preact";
import { Entity } from "aframe-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth";
import { resetNavigation } from "../store/navigation";
import { clickGeneral, clickTheme } from "../store/setting";

import iconArrow from "../assets/icons/arrow.png";

export default function SettingScreen() {
  const dispatch = useDispatch();
  const settingState = useSelector((state) => state.setting);

  return (
    <Entity
      id="settings"
      primitive="a-plane"
      position="0 1.5 -3.5"
      height="3"
      width="5"
      material={{
        color: "#111",
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
          color: "#000",
          opacity: "0.9",
        }}
      >
        <Entity
          text={{
            value: "Pengaturan",
            width: 4,
            color: "white",
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
          material={{
            color: settingState.isGeneralActive ? "#3A337D" : "#111111",
            opacity: "0.9",
          }}
          events={{
            click: () => {
              dispatch(clickGeneral());
            },
          }}
        >
          <Entity
            text={{
              value: "Umum",
              width: 4,
              color: "white",
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
          material={{
            color: settingState.isThemeActive ? "#3A337D" : "#111111",
            opacity: "0.9",
          }}
          events={{
            click: () => {
              dispatch(clickTheme());
            },
          }}
        >
          <Entity
            text={{
              value: "Tema",
              width: 4,
              color: "white",
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

      {settingState.isGeneralActive ? (
        <Entity id="general">
          <Entity
            text={{
              value: "Umum",
              width: 4,
              color: "white",
              align: "center",
            }}
            position="-0.3 1.25 0.01"
          />
          <Entity id="language">
            <Entity
              text={{
                value: "Bahasa",
                width: 3.2,
                color: "white",
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
                color: "#3A337D",
              }}
              position="0.03 0.55 0.02"
            >
              <Entity
                text={{
                  value: "Bahasa Indonesia",
                  width: 2.5,
                  color: "black",
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
                color: "#fff",
              }}
              position="1.13 0.55 0.02"
            >
              <Entity
                text={{
                  value: "English",
                  width: 2.5,
                  color: "black",
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
                color: "white",
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
              event-set__mouseenter={{
                material: {
                  color: "#3A337D",
                },
              }}
              event-set__mouseleave="material.color: white"
              position="-0.3 -0.3 0.02"
            >
              <Entity
                geometry="primitive: plane; height: 1.0; width: 1.0"
                color="white"
                material={{ src: iconArrow, alphaTest: 0.5 }}
                position="0 0 0.01"
                rotation="0 0 180"
                scale="0.2 0.2 0.2"
              />
            </Entity>
            <Entity
              text={{
                value: "0.4",
                width: 4,
                color: "white",
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
              event-set__mouseenter={{
                material: {
                  color: "#3A337D",
                },
              }}
              event-set__mouseleave="material.color: white"
              position="0.6 -0.3 0.02"
            >
              <Entity
                geometry="primitive: plane; height: 1.0; width: 1.0"
                color="white"
                material={{ src: iconArrow, alphaTest: 0.5 }}
                position="0 0 0.01"
                scale="0.2 0.2 0.2"
              />
            </Entity>
          </Entity>
        </Entity>
      ) : null}

      {settingState.isThemeActive ? (
        <Entity id="theme">
          <Entity
            text={{
              value: "Tema",
              width: 4,
              color: "white",
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
                color: "#3A337D",
                opacity: "0.9",
              }}
            >
              <Entity
                text={{
                  value: "ITS",
                  width: 3,
                  color: "white",
                  align: "center",
                }}
                position="0 0 0.01"
              />
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
            >
              <Entity
                text={{
                  value: "Color Fun",
                  width: 3,
                  color: "white",
                  align: "center",
                }}
                position="0 0 0.03"
              />
            </Entity>
          </Entity>
        </Entity>
      ) : null}
    </Entity>
  );
}
