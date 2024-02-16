import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChidren: 0.1,
        }
    },
}
const sliderVariants = {
    initial:{
        x: 0,
    },
    animate:{
        x: "-220%",
        transition:{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
        }
    },
}
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>OLANIKE OLUBANJI</motion.h2>
          <motion.p variants={textVariants}>
            I{"'"}m a passionate frontend developer with a keen eye for design,
            creating delightful user experiences through clean code and
            innovative web solutions.
          </motion.p>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>See my latest works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
        </motion.div>
        <div className="imageContainer">
            <img src="/niki.png" alt="img" />
        </div>
        <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
            Web Developer
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
