import { h } from "preact";
import { Entity } from "aframe-react";
import { useDispatch, useSelector } from "react-redux";
import { circularPositionFrom } from "../utils/calculation";
import Loading from "./Loading";
import moment from "moment";
import "moment/locale/id";
import { setPost } from "../store/post";
import { clickPostView } from "../store/navigation";

import avatar from "../assets/icons/avatar-s.png";
import like from "../assets/icons/like.png";
import liked from "../assets/icons/liked.png";
import comment from "../assets/icons/comment.png";

export default function PostList() {
  const dispatch = useDispatch();
  const systemState = useSelector((state) => state.system);
  const postState = useSelector((state) => state.post);
  const authState = useSelector((state) => state.auth);

  const createCards = () => {
    let posts = postState.posts;
    let childrens = [];
    for (let i = 0; i < posts.length; i++) {
      let pos = circularPositionFrom(i, posts.length);
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
            material={{ color: "#eee" }}
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
                dispatch(setPost(posts[i]));
                dispatch(clickPostView());
              },
            }}
          >
            <Entity position="-1.5 0.58 0.13">
              <Entity primitive="a-image" src={avatar} scale="0.4 0.4 0.4" />
              <Entity
                text={{
                  value: posts[i].author.name,
                  width: 3,
                  color: "black",
                  anchor: "left",
                }}
                position="0.4 0.14 0.0"
              />
              <Entity
                text={{
                  value: `${posts[i].author.batch} - ${posts[i].author.department}`,
                  width: 2.2,
                  color: "black",
                  anchor: "left",
                }}
                position="0.4 -0.04 0.0"
              />
              <Entity
                text={{
                  value: moment(posts[i].createdAt).locale("id").format("LLL"),
                  width: 2.2,
                  color: "black",
                  anchor: "left",
                }}
                position="0.4 -0.18 0.0"
              />
            </Entity>
            <Entity
              text={{
                value: `${posts[i].content.substring(0, 152)} ${
                  posts[i].content.length >= 152 ? "..." : ""
                }`,
                width: 3.5,
                color: "black",
                align: "center",
              }}
              position="0.0 -0.1 0.1"
            />
            <Entity position="0.0 -0.7 0.11">
              <Entity id="like" position="-1.0 0.0 0.0">
                {posts[i].likes.find((id) => id === authState.id) ? (
                  <Entity primitive="a-image" src={liked} scale="0.2 0.2 0.2" />
                ) : (
                  <Entity primitive="a-image" src={like} scale="0.2 0.2 0.2" />
                )}
                <Entity
                  text={{
                    value: posts[i].likes.length + " Suka",
                    width: 3,
                    color: "black",
                    anchor: "left",
                  }}
                  position="0.18 0.0 0.0"
                />
              </Entity>
              <Entity id="comment" position="0.0 0.0 0.0">
                <Entity primitive="a-image" src={comment} scale="0.2 0.2 0.2" />
                <Entity
                  text={{
                    value: posts[i].comments.length + " Komentar",
                    width: 3,
                    color: "black",
                    anchor: "left",
                  }}
                  position="0.18 0.0 0.0"
                />
              </Entity>
            </Entity>
          </Entity>
        </Entity>
      );
    }
    return childrens;
  };

  if (postState.posts.length)
    return <Entity id="postList">{createCards()}</Entity>;
  else return <Loading />;
}
