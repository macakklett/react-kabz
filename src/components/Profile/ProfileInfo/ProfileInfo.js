import React from "react";
import foto from './image-jennie.jpg';
import s from './ProfileInfo.module.css';

function ProfileInfo(props) {
  return (
    <div className={s.descriptionBlock}>
      <img src={foto} alt="photographia" />
      <div>ava + description</div>
    </div>
  );
}

export default ProfileInfo;
