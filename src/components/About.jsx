import React, { memo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = memo(({ index, title, icon }) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className='xs:w-[250px] w-full'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
));

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

     <motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
>
  I'm a Full Stack Developer with experience in TypeScript and JavaScript,
  building modern web applications using React, Node.js, and Three.js. I
  specialize in developing scalable, efficient, and user-friendly solutions
  across both frontend and backend. I'm a fast learner and enjoy working
  closely with clients to turn ideas into real-world products. Let's build
  something great together!
</motion.p>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
  {services.map((service, index) => (
    <ServiceCard key={service.title} index={index} {...service} />
  ))}
</div>
    </>
  );
};

export default SectionWrapper(About, "about");
