import Connected from './connected'
import Faces from '../Default Pages/faces'
import Families from '../Default Pages/families'
import ClientSay from '../Default Pages/Client Review/clientSay'
import QuestionAnswer from '../Default Pages/QuestionAnswer/questionAnswer'
import Footer from '../Default Pages/footer'
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const MainPageContact = () => {
  return (
    <div>
         <motion.div variants={fadeInUp}  whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="opacity-0"> <Faces/></motion.div>
         <motion.div variants={fadeInUp}  whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="opacity-0"><Families/></motion.div>
         <motion.div variants={fadeInUp}  whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="opacity-0"> <ClientSay/></motion.div>
         <motion.div variants={fadeInUp}  whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="opacity-0"><Connected/></motion.div>
         <motion.div variants={fadeInUp}  whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="opacity-0">   <QuestionAnswer onSet={"agent"}/></motion.div>
         <motion.div variants={fadeInUp}  whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="opacity-0">  <Footer/></motion.div></div>
  )
}

export default MainPageContact