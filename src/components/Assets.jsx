// @ts-nocheck
import { h } from "preact";
import { useEffect } from "preact/hooks";

// Environtment
import baak from "../assets/environtment/360-baak-front.jpg";
import graha from "../assets/environtment/360-graha-front.jpg";
import bundaran from "../assets/environtment/360-bundaran.jpg";
import lingpus from "../assets/environtment/360-lingpus-side.jpg";
import manarul from "../assets/environtment/360-manarul-indoor.jpg";
import fasor from "../assets/environtment/360-fasor-lapangan.jpg";
import tamanAlumni from "../assets/environtment/360-taman-alumni.jpg";
import perpustakan from "../assets/environtment/360-perpustakaan-front.jpg";

//icons
import iconMenu from "../assets/icons/menu.png";
import iconCompass from "../assets/icons/compass.png";
import iconProfile from "../assets/icons/avatar.png";
import iconSettings from "../assets/icons/settings.png";
import iconNotification from "../assets/icons/bell.png";
import iconAvatar from "../assets/icons/avatar-s.png";
import iconEducation from "../assets/icons/book.png";
import iconPlus from "../assets/icons/plus.png";
import iconFriendlist from "../assets/icons/group.png";
import iconExperience from "../assets/icons/suitcase.png";
import iconSkill from "../assets/icons/logical-thinking.png";
import iconLike from "../assets/icons/like.png";
import iconLiked from "../assets/icons/liked.png";
import iconComment from "../assets/icons/comment.png";

/*
 *  Asset management system.
 */
export default function Assets() {
  return (
    <a-assets>
      <img id="baakEnvirontment" src={baak} />
      <img id="grahaEnvirontment" src={graha} />
      <img id="bundaranItsEnvirontment" src={bundaran} />
      <img id="lingpusEnvirontment" src={lingpus} />
      <img id="manarulEnvirontment" src={manarul} />
      <img id="fasorEnvirontment" src={fasor} />
      <img id="tamanAlumniEnvirontment" src={tamanAlumni} />
      <img id="perpustakaanEnvirontment" src={perpustakan} />

      <img id="iconMenu" src={iconMenu} />
      <img id="iconCompass" src={iconCompass} />
      <img id="iconProfile" src={iconProfile} />
      <img id="iconSettings" src={iconSettings} />
      <img id="iconNotification" src={iconNotification} />
      <img id="iconAvatar" src={iconAvatar} />
      <img id="iconEducation" src={iconEducation} />
      <img id="iconPlus" src={iconPlus} />
      <img id="iconFriendlist" src={iconFriendlist} />
      <img id="iconExperience" src={iconExperience} />
      <img id="iconSkill" src={iconSkill} />
      <img id="iconLike" src={iconLike} />
      <img id="iconLiked" src={iconLiked} />
      <img id="iconComment" src={iconComment} />
    </a-assets>
  );
}
