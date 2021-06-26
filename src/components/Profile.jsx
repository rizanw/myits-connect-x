import { h } from "preact";
import { Entity, Scene } from "aframe-react";
import { useDispatch, useSelector } from "react-redux";
import {
  clickEducation,
  clickExperience,
  clickSkill,
  resetNavigation,
} from "../store/navigation";
import { clickFriendList } from "../store/navigation";
import { randomColor } from "../utils/colors";
import Loading from "./Loading";

import avatar from "../assets/icons/avatar-s.png";
import education from "../assets/icons/book.png";
import plus from "../assets/icons/plus.png";
import friendlist from "../assets/icons/group.png";
import experience from "../assets/icons/suitcase.png";
import skill from "../assets/icons/logical-thinking.png";
import button from "../assets/gltf/buttonRec.gltf";
import buttonSmall from "../assets/gltf/buttonRecSmall.gltf";

const KEAHLIAN = [
  { id: "321321", title: "React" },
  { id: "232321", title: "WebXR" },
  { id: "d32132", title: "a-frame" },
  { id: "dsda23", title: "Mobile Developer" },
  { id: "sada22", title: "Web Developer" },
];

const PENGALAMAN = [
  {
    id: "232321",
    title: "WebXR Developer",
    company: "Antonio Tech, Surabaya",
    time: "Desember 2020 - Sekarang",
  },
  {
    id: "dsda23",
    title: "Mobile Developer",
    company: "Antonio Tech, Surabaya",
    time: "Mei 2019 - Oktober 2020",
  },
  {
    id: "321321",
    title: "UI/UX Designer Intern",
    company: "Antonio Tech, Surabaya",
    time: "Desember 2018 - Februari 2019",
  },
];

const PENDIDIKAN = [
  {
    id: "232321",
    title: "S-1 Teknik Informatika",
    company: "Institut Teknologi Sepuluh Nopember",
    time: "2016 - 2020",
  },
];

export default function Profile() {
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.profile);
  const navigationState = useSelector((state) => state.navigation);
  const systemState = useSelector((state) => state.system);

  const createEducationCards = () => {
    let childrens = [];
    let startPos = 0.1;
    for (let i = 0; i < profileState.educations.length; i++) {
      childrens.push(
        <Entity
          geometry={{
            primitive: "box",
            height: 1.2,
            width: 5,
            depth: 0.2,
          }}
          material={{
            color: systemState.theme === "colorfun" ? randomColor() : "#fff",
          }}
          position={"2.6 " + startPos + " -5"}
          rotation="0 -15 0"
        >
          <Entity
            text={{
              value: profileState.educations[i].name,
              width: 6,
              color: "black",
              align: "left",
              anchor: "align",
            }}
            position="-2 0.3 0.2"
          />
          <Entity
            text={{
              value: profileState.educations[i].location,
              width: 4,
              color: "black",
              align: "left",
              anchor: "align",
            }}
            position="-2 0 0.2"
          />
          <Entity
            text={{
              value: profileState.educations[i].period,
              width: 4,
              color: "black",
              align: "left",
              anchor: "align",
            }}
            position="-2 -0.25 0.2"
          />
        </Entity>
      );
      startPos = startPos + 1.4;
    }
    return childrens;
  };

  const createExperienceCards = () => {
    let childrens = [];
    let startPos = 0.1;
    for (let i = 0; i < profileState.experiences.length; i++) {
      childrens.push(
        <Entity
          geometry={{
            primitive: "box",
            height: 1.2,
            width: 5,
            depth: 0.2,
          }}
          material={{
            color: systemState.theme === "colorfun" ? randomColor() : "#fff",
          }}
          position={"2.6 " + startPos + " -5"}
          rotation="0 -15 0"
        >
          <Entity
            text={{
              value: profileState.experiences[i].name,
              width: 6,
              color: "black",
              align: "left",
              anchor: "align",
            }}
            position="-2 0.3 0.2"
          />
          <Entity
            text={{
              value: profileState.experiences[i].location,
              width: 4,
              color: "black",
              align: "left",
              anchor: "align",
            }}
            position="-2 0 0.2"
          />
          <Entity
            text={{
              value: profileState.experiences[i].period,
              width: 4,
              color: "black",
              align: "left",
              anchor: "align",
            }}
            position="-2 -0.25 0.2"
          />
        </Entity>
      );
      startPos = startPos + 1.4;
    }
    return childrens;
  };

  const createSkillCards = () => {
    let childrens = [];
    let startPos = -0.2;
    for (let i = 0; i < profileState.skills.length; i++) {
      childrens.push(
        <Entity
          geometry={{
            primitive: "box",
            height: 0.6,
            width: 5,
            depth: 0.2,
          }}
          material={{
            color: systemState.theme === "colorfun" ? randomColor() : "#fff",
          }}
          position={"2.6 " + startPos + " -5"}
          rotation="0 -15 0"
        >
          <Entity
            text={{
              value: profileState.skills[i],
              width: 6,
              color: "black",
              align: "left",
            }}
            position="1 0 0.2"
          />
        </Entity>
      );
      startPos = startPos + 0.8;
    }
    return childrens;
  };

  if (profileState.id)
    return (
      <Entity id="profile">
        <Entity
          geometry={{
            primitive: "box",
            height: 4.6,
            width: 5.5,
            depth: 0.2,
          }}
          material={{
            color: systemState.theme === "colorfun" ? randomColor() : "#3A337D",
          }}
          position="-2.8 1.8 -5"
          rotation="0 15 0"
        >
          <Entity
            geometry={{ primitive: "cylinder", height: 0.3, radius: 0.8 }}
            material={{
              color: systemState.theme === "colorfun" ? randomColor() : "#fff",
            }}
            rotation="90 0 0"
            position="0 2 0.05"
          >
            <Entity
              primitive="a-image"
              src={avatar}
              rotation="90 180 0"
              position="0 0.16 0"
            />
          </Entity>

          {profileState.id ? null : (
            <Entity
              class="clickable"
              gltf-model={buttonSmall}
              scale="0.9 0.9 0.9"
              position="1.8 1.8 0.120"
              event-set__enter={{
                _event: "mouseenter",
                _target: "#connectTitle",
                visible: "true",
              }}
              event-set__leave={{
                _event: "mouseleave",
                _target: "#connectTitle",
                visible: "false",
              }}
            >
              <Entity
                primitive="a-image"
                src={plus}
                position="0 0 0.12"
                scale="0.4 0.4 0.4"
              />
              <Entity
                id="connectTitle"
                text={{
                  value: "Connect",
                  width: 5,
                  color: systemState.theme === "colorfun" ? "#000" : "#fff",
                  align: "center",
                }}
                position="0 -0.6 0"
                visible="false"
              />
            </Entity>
          )}

          <Entity
            class="clickable"
            gltf-model={buttonSmall}
            scale="0.9 0.9 0.9"
            position="-1.8 1.8 0.120"
            event-set__enter={{
              _event: "mouseenter",
              _target: "#friendlistTitle",
              visible: "true",
            }}
            event-set__leave={{
              _event: "mouseleave",
              _target: "#friendlistTitle",
              visible: "false",
            }}
            events={{
              click: () => {
                dispatch(clickFriendList());
              },
            }}
          >
            <Entity
              primitive="a-image"
              src={friendlist}
              position="0 0 0.12"
              scale="0.5 0.5 0.5"
            />
            <Entity
              id="friendlistTitle"
              text={{
                value: "FriendList",
                width: 5,
                color: systemState.theme === "colorfun" ? "#000" : "#fff",
                align: "center",
              }}
              position="0 -0.6 0"
              visible="false"
            />
          </Entity>
          <Entity
            text={{
              value: profileState.name,
              width: 8,
              color: systemState.theme === "colorfun" ? "#000" : "#fff",
              align: "center",
            }}
            position="0 0.9 0.2"
          />
          <Entity
            text={{
              value: profileState.position,
              width: 5,
              color: systemState.theme === "colorfun" ? "#000" : "#fff",
              align: "center",
            }}
            position="0 0.5 0.2"
          />
          <Entity
            text={{
              value: `${profileState.city} ${profileState.province}, ${profileState.country}`,
              width: 5,
              color: systemState.theme === "colorfun" ? "#000" : "#fff",
              align: "center",
            }}
            position="0 0.2 0.2"
          />

          <Entity
            class="clickable"
            gltf-model={button}
            position="-1.5 -1 0.120"
            event-set__enter={{
              _event: "mouseenter",
              _target: "#skillTitle",
              visible: "true",
            }}
            event-set__leave={{
              _event: "mouseleave",
              _target: "#skillTitle",
              visible: profileState.isSkillActive ? "true" : "false",
            }}
            events={{
              click: () => {
                profileState.isSkillActive
                  ? dispatch(resetNavigation())
                  : dispatch(clickSkill());
              },
            }}
          >
            <Entity
              primitive="a-image"
              src={skill}
              position="0 0 0.12"
              scale="0.8 0.8 0.8"
            />
            <Entity
              id="skillTitle"
              text={{
                value: "Keahlian",
                width: 5,
                color: systemState.theme === "colorfun" ? "#000" : "#fff",
                align: "center",
              }}
              position="0 -0.8 0"
              visible={profileState.isSkillActive}
            />
          </Entity>
          <Entity
            class="clickable"
            gltf-model={button}
            position="0 -1 0.120"
            event-set__enter={{
              _event: "mouseenter",
              _target: "#experienceTitle",
              visible: "true",
            }}
            event-set__leave={{
              _event: "mouseleave",
              _target: "#experienceTitle",
              visible: profileState.isExperienceActive ? "true" : "false",
            }}
            events={{
              click: () => {
                profileState.isExperienceActive
                  ? dispatch(resetNavigation())
                  : dispatch(clickExperience());
              },
            }}
          >
            <Entity
              primitive="a-image"
              src={experience}
              position="0 0 0.12"
              scale="0.8 0.8 0.8"
            />
            <Entity
              id="experienceTitle"
              text={{
                value: "Pengalaman",
                width: 5,
                color: systemState.theme === "colorfun" ? "#000" : "#fff",
                align: "center",
              }}
              position="0 -0.8 0"
              visible={profileState.isExperienceActive}
            />
          </Entity>
          <Entity
            class="clickable"
            gltf-model={button}
            position="1.5 -1 0.120"
            event-set__enter={{
              _event: "mouseenter",
              _target: "#educationTitle",
              visible: "true",
            }}
            event-set__leave={{
              _event: "mouseleave",
              _target: "#educationTitle",
              visible: profileState.isEducationActive ? "true" : "false",
            }}
            events={{
              click: () => {
                profileState.isEducationActive
                  ? dispatch(resetNavigation())
                  : dispatch(clickEducation());
              },
            }}
          >
            <Entity
              primitive="a-image"
              src={education}
              position="0 0 0.12"
              scale="0.8 0.8 0.8"
            />
            <Entity
              id="educationTitle"
              text={{
                value: "Pendidikan",
                width: 5,
                color: systemState.theme === "colorfun" ? "#000" : "#fff",
                align: "center",
              }}
              position="0 -0.8 0"
              visible={profileState.isEducationActive}
            />
          </Entity>
        </Entity>
        {navigationState.isSkillActive ? createSkillCards() : null}
        {navigationState.isExperienceActive ? createExperienceCards() : null}
        {navigationState.isEducationActive ? createEducationCards() : null}
      </Entity>
    );
  else return <Loading />;
}
