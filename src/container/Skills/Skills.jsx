import React, { useState, useEffect } from "react";
import { AiFillEve, AiFillEye, AiFillGithub } from "react-icons/ai";
import ReactToolTip from "react-tooltip";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skill.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <div className="skills-wrapper">
      <h2 className="head-text">Skill & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences?.map((workExp) => {
            return (
              <>
                <motion.div className="app__skills-exp-item" key={workExp.year}>
                  <div className="app__skills-exp-year">
                    <p className="bold-text">{workExp.year}</p>
                  </div>
                  <motion.div className="app__skills-exp-works">
                    {workExp.works?.map((work) => {
                      return (
                        <>
                          <motion.div
                            className="app__skills-exp-work"
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            data-tip
                            key={work.name}
                            data-for={work.name}
                          >
                            <h4 className="bold-text">{work.name}</h4>
                            <p className="p-text">{work.company}</p>
                          </motion.div>
                          <ReactToolTip
                            id={work.name}
                            effect="solid"
                            arrowColor="#fff"
                            className="skills-tooltip"
                          >
                            {work.desc}
                          </ReactToolTip>
                        </>
                      );
                    })}
                  </motion.div>
                </motion.div>
              </>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app_primaryDark");
