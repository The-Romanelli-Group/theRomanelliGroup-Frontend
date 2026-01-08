import React from "react";
import { motion } from "framer-motion";
import NumberSpeak from "../Default Pages/numberSpeak";
import Faces from "../Default Pages/faces";
import Families from "../Default Pages/families";
import QuestionAnswer from "../Default Pages/QuestionAnswer/questionAnswer";
import Talk from "../Default Pages/talk";
import Footer from "../Default Pages/footer";
import ClientSay from "../Default Pages/Client Review/clientSay";
import Succeed from "../Default Pages/succeed";
import ClientSuccess from "../Default Pages/clientSuccess";

// Animation Variants (Slide-up & Fade-in)
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const MainPage = () => {
  return (
    <div className="font-dmsans">
      {/* Each section fades in as it comes into view */}
      <motion.div
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="opacity-0 -my-1"
      >
        <NumberSpeak />
      </motion.div>

      <motion.div variants={fadeInUp}  whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="opacity-0">
        <Faces />
      </motion.div>

      <motion.div variants={fadeInUp}  whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="opacity-0">
        <Families />
      </motion.div>

      <motion.div variants={fadeInUp}  whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="opacity-0">
        <ClientSay />
      </motion.div>

      <motion.div variants={fadeInUp}  whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="opacity-0">
        <Succeed />
      </motion.div>

      {/* <motion.div variants={fadeInUp}  whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="opacity-0"> */}
        <ClientSuccess />
      {/* </motion.div> */}

      <motion.div variants={fadeInUp}  whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="opacity-0 -my-1">
        <QuestionAnswer onSet={"agent"}/>
      </motion.div>

      <motion.div variants={fadeInUp}  whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="opacity-0 -my-1">
        <Talk />
      </motion.div>

      <motion.div variants={fadeInUp}  whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="opacity-0">
        <Footer />
      </motion.div>
    </div>
  );
};

export default MainPage;
