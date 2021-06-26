import { h } from "preact";
import { Entity } from "aframe-react";
import { useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { circularPositionFrom } from "../utils/calculation";

import avatar from "../assets/icons/avatar-s.png";
import like from "../assets/icons/like.png";
import liked from "../assets/icons/liked.png";
import comment from "../assets/icons/comment.png";
import { likePost, unlikePost } from "../store/post/actions";

export default function PostView() {
  const dispatch = useDispatch();
  const systemState = useSelector((state) => state.system);
  const settingState = useSelector((state) => state.setting);

  const authState = useSelector((state) => state.auth);
  const postState = useSelector((state) => state.post);
  const [isCommentShowed, setIsCommentShowed] = useState(false);

  const createCommentCards = () => {
    let comments = postState.post.comments;
    let childrens = [];
    let length = comments.length <= 15 ? comments.length : 15;

    for (let i = 0; i < length; i++) {
      let pos = circularPositionFrom(i, length, 1, 14);
      childrens.push(
        <Entity
          class="comment-animation"
          animation={{
            property: "rotation",
            to: "0 360 0",
            dur: 10000 / systemState.orbitalSpeed.toFixed(1),
            easing: "linear",
            loop: "true",
          }}
        >
          <Entity
            class="clickable"
            geometry={{
              primitive: "box",
              height: 1.5,
              width: 4,
              depth: 0.1,
            }}
            material="color: #bbb"
            look-at=""
            rotation="0 -359 0"
            position={pos}
            events={{
              mouseenter: () => {
                const commentAnimation = document.getElementsByClassName(
                  "comment-animation"
                );
                for (let i = 0; i < commentAnimation.length; i++) {
                  commentAnimation[i].components.animation.pauseAnimation();
                }
              },
              mouseleave: () => {
                const commentAnimation = document.getElementsByClassName(
                  "comment-animation"
                );
                for (let i = 0; i < commentAnimation.length; i++) {
                  commentAnimation[i].components.animation.resumeAnimation();
                }
              },
            }}
          >
            <Entity position="1.65 0.45 -0.06" rotation="0 180 0">
              <Entity primitive="a-image" src={avatar} scale="0.3 0.3 0.3" />
              <Entity
                text={{
                  value: comments[i].user.name,
                  width: 2.5,
                  color: "black",
                  anchor: "left",
                }}
                position="0.2 0.08 0"
              />
              <Entity
                text={{
                  value: `${comments[i].user.batch} - ${comments[i].user.department}`,
                  width: 2.2,
                  color: "black",
                  anchor: "left",
                }}
                position="0.2 -0.08 0"
              />
            </Entity>
            <Entity
              text={{
                value: moment(comments[i].createdAt).locale("id").format("LLL"),
                width: 2.4,
                color: "black",
                anchor: "left",
              }}
              position="-0.65 0.5 -0.06"
              rotation="0 180 0"
            />
            <Entity
              text={{
                value:
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,",
                width: 3.7,
                wrapCount: 68,
                color: "black",
              }}
              position="0.0 -0.18 -0.07"
              rotation="0 180 0"
            />
          </Entity>
        </Entity>
      );
    }
    return childrens;
  };

  return (
    <Entity>
      <Entity
        class="clickable"
        primitive="a-box"
        height="2.5"
        width="5.5"
        depth="0.1"
        material={{
          color: "#eee",
        }}
        position="0.0 2.6 -4.0"
      >
        <Entity id="post-info" position="-2.3 0.85 0.1">
          <Entity primitive="a-image" src={avatar} scale="0.4 0.4 0.4" />
          <Entity
            text={{
              value: postState.post.author.name,
              width: 3,
              color: "black",
              anchor: "left",
            }}
            position="0.4 0.14 0.0"
          />
          <Entity
            text={{
              value: `${postState.post.author.batch} - ${postState.post.author.department}`,
              width: 2.2,
              color: "black",
              anchor: "left",
            }}
            position="0.4 -0.04 0.0"
          />
          <Entity
            text={{
              value: moment(postState.post.createdAt)
                .locale("id")
                .format("LLL"),
              width: 2.2,
              color: "black",
              anchor: "left",
            }}
            position="0.4 -0.18 0.0"
          />
        </Entity>

        <Entity
          id="like"
          class="clickable"
          geometry="primitive: plane; height: 0.2; width: 1.2"
          material="color: #eee"
          position="2.0 0.95 0.1"
          events={{
            click: () => {
              postState.post.likes.find((user) => user.id === authState.id)
                ? dispatch(unlikePost(postState.post._id))
                : dispatch(likePost(postState.post._id));
            },
            mouseenter: (e) => {
              e.target.setAttribute("material", {
                color: "#013880",
              });
            },
            mouseleave: (e) => {
              e.target.setAttribute("material", {
                color: "#eee",
              });
            },
          }}
        >
          {postState.post.likes.find((user) => {
            console.log("user",user);
          }) ? (
            <Entity
              primitive="a-image"
              src={liked}
              scale="0.15 0.15 0.15"
              position="-0.4 0.0 0.0"
            />
          ) : (
            <Entity
              primitive="a-image"
              src={like}
              scale="0.15 0.15 0.15"
              position="-0.4 0.0 0.0"
            />
          )}
          <Entity
            text={{
              value: postState.post.likes.length + " Suka",
              width: 2.5,
              color: "black",
              anchor: "left",
            }}
            position="-0.25 0.0 0.0"
          />
        </Entity>
        <Entity
          id="comment"
          class="clickable"
          geometry="primitive: plane; height: 0.2; width: 1.2"
          material="color: #eee"
          position="2.0 0.7 0.1"
          events={{
            click: () => {
              setIsCommentShowed(!isCommentShowed);
            },
            mouseenter: (e) => {
              e.target.setAttribute("material", {
                color: "#013880",
              });
            },
            mouseleave: (e) => {
              e.target.setAttribute("material", {
                color: "#eee",
              });
            },
          }}
        >
          <Entity
            primitive="a-image"
            src={comment}
            scale="0.15 0.15 0.15"
            position="-0.4 0.0 0.0"
          />
          <Entity
            text={{
              value: postState.post.comments.length + " Komentar",
              width: 2.5,
              color: "black",
              anchor: "left",
            }}
            position="-0.25 0.0 0.0"
          />
        </Entity>

        <Entity
          id="post-content"
          text={{
            value: postState.post.content,
            color: "black",
            anchor: "left",
            align: "justify",
            baseline: "top",
            width: 5,
            wrapCount: 80,
          }}
          position="-2.5 0.5 0.1"
        />
      </Entity>
      {isCommentShowed ? (
        <Entity id="post-comments" position="0.0 -0.5 -19.0">
          {createCommentCards()}
        </Entity>
      ) : null}
    </Entity>
  );
}