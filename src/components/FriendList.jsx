import { h } from "preact";
import { Entity } from "aframe-react";
import { useEffect, useState } from "preact/hooks";
import { circularFriendPositionFrom } from "../utils/calculation";
import { clickProfile } from "../store/navigation";
import { useDispatch, useSelector } from "react-redux";
import { randomColor } from "../utils/colors";
import Loading from "./Loading";
import { getProfile, isFriend } from "../store/profile/actions";
import { clearFriends } from "../store/profile";

import avatar from "../assets/icons/avatar-s.png";
import button from "../assets/gltf/buttonRec.gltf";
import iconArrow from "../assets/icons/arrow.png";

export default function FriendList() {
  const dispatch = useDispatch();
  const systemState = useSelector((state) => state.system);
  const profileState = useSelector((state) => state.profile);
  const friends = profileState.friends.friends;
  const [page, setPage] = useState(1);

  useEffect(() => {}, [friends]);

  const createCards = () => {
    let maxCards = 0;
    if (friends.length - page * 30 + 30 < 30) {
      maxCards = friends.length - page * 30 + 30;
    } else if (friends.length >= 30) {
      maxCards = 30;
    } else maxCards = friends.length;

    let childrens = [];
    let iPos = 0;
    for (let i = maxCards * page - maxCards; i < maxCards * page; i++) {
      let pos = circularFriendPositionFrom(iPos, maxCards);
      iPos === maxCards - 1 ? (iPos = 0) : iPos++;
      childrens.push(
        <Entity
          animation={{
            property: "rotation",
            to: "0 " + 360 + " 0",
            dur: 100000,
            easing: "linear",
            loop: "true",
          }}
        >
          <Entity
            look-at="#user"
            class="clickable"
            geometry={{
              primitive: "box",
              height: 1,
              width: 2,
              depth: 0.1,
            }}
            material={{
              color: systemState.theme === "colorfun" ? randomColor() : "#fff",
            }}
            position={pos}
            animation__mouseenter={{
              property: "scale",
              to: "1.2 1.2 1.2",
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
                dispatch(getProfile(friends[i]._id)).then((res) => {
                  dispatch(isFriend(friends[i]._id));
                  dispatch(clearFriends());
                });
                dispatch(clickProfile());
              },
            }}
          >
            <Entity
              primitive="a-image"
              src={avatar}
              position="-0.7 0 0.06"
              scale="0.5 0.5 0.5"
            />
            <Entity
              text={{
                value: friends[i].name,
                width: 3.2,
                color: "black",
                align: "left",
                anchor: "left",
              }}
              position="-0.4 0.16 0.05"
            />
            <Entity
              text={{
                value: friends[i].batch + " - " + friends[i].department,
                width: 2,
                color: "black",
                align: "left",
                anchor: "left",
              }}
              position="-0.4 0 0.05"
            />
            <Entity
              text={{
                value:
                  "Sepanjang apa kah ini coba di test dulu gimana hasilnya hayppp",
                width: 1.5,
                color: "black",
                align: "left",
                anchor: "left",
                wrapCount: 30,
              }}
              position="-0.4 -0.18 0.05"
            />
          </Entity>
        </Entity>
      );
    }
    return childrens;
  };

  if (profileState.friends.length != 0)
    return (
      <Entity id="friendlist">
        {createCards()}

        <Entity
          id="refresh"
          primitive="a-plane"
          height="0.4"
          width="1.25"
          material={{
            color: "#EBEBF0",
            opacity: "0.9",
          }}
          position="0 0.65 -2.1"
          rotation="-25 0 0"
        >
          <Entity
            text={{
              value:
                (page * 30 > friends.length ? friends.length : page * 30) +
                " / " +
                friends.length,
              width: 2.6,
              color: "black",
              align: "center",
            }}
            position="0 0 0.01"
          />
          <Entity
            id="button-left"
            gltf-model={button}
            class="clickable"
            position="-0.6 0 0"
            scale="0.2 0.2 0.2"
            events={{
              click: () => {
                if (page > 1) {
                  setPage(page - 1);
                }
              },
            }}
          >
            <Entity
              geometry="primitive: plane; height: 1.0; width: 1.0"
              color="white"
              material={{ src: iconArrow, alphaTest: 0.5 }}
              position="0 0 0.15"
              scale="0.45 0.45 0.45"
              rotation="0 0 180"
            />
          </Entity>
          <Entity
            id="button-right"
            gltf-model={button}
            class="clickable"
            position="0.6 0 0"
            scale="0.2 0.2 0.2"
            events={{
              click: () => {
                if (page < Math.ceil(friends.length / 30)) {
                  setPage(page + 1);
                }
              },
            }}
          >
            <Entity
              geometry="primitive: plane; height: 1.0; width: 1.0"
              color="white"
              material={{ src: iconArrow, alphaTest: 0.5 }}
              position="0 0 0.15"
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
        </Entity>
      </Entity>
    );
  else {
    if (profileState.errorMessage)
      return (
        <Entity
          primitive="a-plane"
          height="1"
          width="2"
          material={{
            color: "#EBEBF0",
            opacity: "0.9",
          }}
          position="0 1.5 -3"
        >
          <Entity
            text={{
              value: profileState.errorMessage,
              width: 3,
              color: "black",
              align: "center",
              anchor: "center",
            }}
            position="0 0 0.1"
          />
        </Entity>
      );
    return <Loading />;
  }
}
