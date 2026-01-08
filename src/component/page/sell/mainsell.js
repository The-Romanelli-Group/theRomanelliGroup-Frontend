import React from 'react'
import Simplified from './simplified'
import ClientSuccess from '../Default Pages/clientSuccess'
import QuestionAnswer from '../Default Pages/QuestionAnswer/questionAnswer'
import Footer from '../Default Pages/footer'
import SellSmarter from './sellSmarter'
import Talk from '../Default Pages/talk'
import { motion } from "framer-motion";
import ClientSay from '../Default Pages/Client Review/clientSay'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const Mainsell = () => {
  return (
    <div >
       <motion.div
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="opacity-0 -my-1"
      ><Simplified/>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="opacity-0 -my-1"
      > <ClientSay/></motion.div>
    <motion.div
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="opacity-0 -my-1"
      ><ClientSuccess/> </motion.div>
  <motion.div
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="opacity-0 -my-1"
      > <SellSmarter/></motion.div> 
   <motion.div
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="opacity-0 -my-1"
      ><QuestionAnswer onSet={"seller"}/>
      </motion.div> 
    <motion.div
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="opacity-0 -my-1"
      ><Talk /></motion.div>
   <motion.div
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="opacity-0 -my-1"
      ><Footer/></motion.div> </div>
  )
}

export default Mainsell