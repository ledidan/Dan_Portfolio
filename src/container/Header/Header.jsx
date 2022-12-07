import React from "react";
import "./Header.scss";
import { AppWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { images } from "../../constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">Dan</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p>Software Engineer</p>
            <p className="p-text">❤️ Full Stack</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ scale: [0.5, 1] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.typescript, images.node, images.redux].map((circle, index) => {
          return (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
