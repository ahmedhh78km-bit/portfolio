import React, { memo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = memo(({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-2xl transition-shadow duration-300"
      >
        {/* IMAGE */}
        <div className="relative w-full h-[230px] group">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 gpu-accelerated"
          />

          {/* BUTTONS */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

            {/* GitHub */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              onKeyDown={(e) => e.key === 'Enter' && window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300 gpu-accelerated"
              role="button"
              aria-label="View source code on GitHub"
              tabIndex={0}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            {/* Live Demo */}
            {live_link !== "#" && (
              <div
                onClick={() => window.open(live_link, "_blank")}
                onKeyDown={(e) => e.key === 'Enter' && window.open(live_link, "_blank")}
                className="bg-blue-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300 gpu-accelerated"
                role="button"
                aria-label="View live demo"
                tabIndex={0}
              >
                🌐
              </div>
            )}

          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description}
          </p>
        </div>

        {/* TAGS */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} hover:opacity-80 transition-opacity cursor-default`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
});

const Works = () => {
  return (
    <>
      {/* HEADER */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* DESCRIPTION */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described
          with links to code repositories and live demos. It reflects my
          ability to solve complex problems and build scalable applications.
        </motion.p>
      </div>

      {/* PROJECTS GRID */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");