import { Tilt } from "react-tilt"
import {motion} from  'framer-motion'
import  {services} from "../../constants"
import {fadeIn,textVariant} from  "../../utils/motion"
import { styles } from "../../style"
import { SectionWrapper } from "../../hoc"
import ServiceCard from "./ServiceCard"

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn('','',0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" >
      Experienced React Developer with 2+ years of experience seeking a challenging positions. Proficient in NextJS, TypeScript, NodeJS, GraphQL, Ruby, and Postgres. Skilled in developing responsive and user-friendly applications, collaborating with cross-functional teams, and delivering high-quality work within tight deadlines.
      </motion.p>
      <div className="mt-20 flex  flex-wrap gap-10">
          {services.map((service,index)=>(
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
      </div>
    </>
  )
}

export default  SectionWrapper(About,"about") 