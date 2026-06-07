import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
<section className="relative w-full h-screen mx-auto bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='flex-1'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Ahmed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Full Stack Developer creating modern web & 3D experiences
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about' className='group' aria-label="Scroll to about section">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 group-hover:border-[#915EFF] transition-colors duration-300 gpu-accelerated'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1 group-hover:bg-[#915EFF] transition-colors duration-300'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
