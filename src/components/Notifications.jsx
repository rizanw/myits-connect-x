import { h } from "preact";
import { Entity } from "aframe-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "preact/hooks";
import { getNotif } from "../store/notification/actions";
import moment from "moment";

const STATUS = ["Tidak ada notifikasi", "Memuat ..."];

export default function Notifications() {
  const dispatch = useDispatch();
  const systemState = useSelector((state) => state.system);
  const notifState = useSelector((state) => state.notification);

  useEffect(() => {
    dispatch(getNotif());
  }, []);

  var startY = 0.5;
  const contentLength = notifState.notifications.length;
  const [startIndex, setStartIndex] = useState(0);

  const scrollTo = (num) => {
    const sum = startIndex + num;
    if (sum >= 0 && sum < contentLength) setStartIndex(sum);
    else if (sum >= contentLength) setStartIndex(contentLength - 1);
    else setStartIndex(0);
  };

  const createCards = () => {
    let childrens = [];
    for (let i = startIndex; i < contentLength; i++) {
      let visible =
        startY === 0.5 || startY === -0.2 || startY === -0.9 ? true : false;
      childrens.push(
        <Entity
          class="clickable"
          primitive="a-box"
          height="0.6"
          width="3.4"
          depth="0.05"
          material={{
            color: "#BCBCC0",
          }}
          position={"0 " + startY.toString() + " 0.05"}
          visible={visible}
        >
          <Entity
            primitive="a-image"
            src="#iconAvatar"
            scale="0.3 0.3 0.3"
            position="-1.45 0 0.05"
          />
          <Entity
            text={{
              value: notifState.notifications[i].content,
              width: 3,
              wrapCount: 45,
              color: "black",
              anchor: "left",
            }}
            position="-1.25 0.1 0.05"
          />
          <Entity
            text={{
              value: moment(notifState.notifications[i].createdAt)
                .locale("id")
                .format("LLL"),
              width: 2.2,
              color: "#444",
              anchor: "left",
            }}
            position="-1.25 -0.1 0.05"
          />
        </Entity>
      );
      startY = parseFloat((startY - 0.7).toFixed(2));
    }
    return childrens;
  };

  return (
    <Entity
      id="notifications"
      primitive="a-box"
      height="2.6"
      width="3.8"
      depth="0.05"
      material={{
        color: "#EBEBF0",
        opacity: systemState.theme === "colorfun" ? "1.0" : "0.9",
      }}
      position="0 1.2 -3.5"
      rotation="-15 0 0"
    >
      <Entity
        text={{
          value: "Notifikasi",
          width: 4,
          color: "black",
          align: "center",
        }}
        position="-1.35 1.05 0.05"
      />

      <Entity
        text={{
          value: notifState.isLoading
            ? STATUS[1]
            : notifState.notifications.length === 0
            ? STATUS[0]
            : "",
          width: 2,
          color: "black",
          align: "center",
        }}
        position="0.0 0.0 0.05"
        visible={
          notifState.notifications.length !== 0 || notifState.isLoading
            ? true
            : false
        }
      />

      {createCards()}

      <Entity
        class="clickable"
        primitive="a-box"
        height="0.35"
        width="0.35"
        depth="0.05"
        position={"-2.0 0.2 0.05"}
        events={{
          click: () => {
            scrollTo(-1);
          },
          mouseenter: (e) => {
            e.target.setAttribute("material", { color: "#013880" });
          },
          mouseleave: (e) => {
            e.target.setAttribute("material", { color: "#ffffff" });
          },
        }}
      >
        <Entity
          geometry="primitive: plane; height: 0.15; width: 0.15"
          material={{ src: "#iconArrow", alphaTest: 0.5 }}
          position="0.0 0.0 0.05"
          rotation="0 0 90"
        />
      </Entity>
      <Entity
        class="clickable"
        primitive="a-box"
        height="0.35"
        width="0.35"
        depth="0.05"
        position={"-2.0 -0.2 0.05"}
        events={{
          click: () => {
            scrollTo(1);
          },
          mouseenter: (e) => {
            e.target.setAttribute("material", { color: "#013880" });
          },
          mouseleave: (e) => {
            e.target.setAttribute("material", { color: "#ffffff" });
          },
        }}
      >
        <Entity
          geometry="primitive: plane; height: 0.15; width: 0.15"
          material={{ src: "#iconArrow", alphaTest: 0.5 }}
          position="0.0 0.0 0.05"
          rotation="0 0 -90"
        />
      </Entity>
    </Entity>
  );
}
