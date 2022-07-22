import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/ledidan" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/blackdouble.d/" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://www.facebook.com/ledidan" target="_blank">
        <FaFacebookF />
      </a>
    </div>
  );
};

export default SocialMedia;
