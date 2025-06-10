import { Col, Container, Row } from "react-bootstrap";
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import {GSskills} from '../../content_option'
import { HideUntilLoaded } from 'react-animation'
import {FiLoader} from 'react-icons/fi'
import './style.css'
// Animation
import "react-circular-progressbar/dist/styles.css";
import 'react-circular-progressbar/dist/styles.css';
import SectionTitle from "../SectionTitle/SectionTitle";

const Skills = () => {


return (
<div className="container" style={{marginBottom: '150px'}}> 
    
     <Row className="mt-3 pt-md-3">
              
               <SectionTitle title={"My Experties"}/>.
                <hr className="t_border my-4 ml-0 text-left" />
              
            </Row>
    
      <div className="skills-grid mb-[200px]">
        {GSskills.map((skill, i) => (
          <div key={i} className="skill-item" data-aos="zoom-in" data-aos-duration="300">
           <div label="Arbitrary content" style={{ width: 100, height: 100 }}>

    
         <CircularProgressbarWithChildren value={skill.value} styles={buildStyles({
            pathColor: skill.sliceColor
         })}
 round>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <HideUntilLoaded
  imageToLoad={skill.image}
   
          
  Spinner={() =>     <FiLoader className="text-[2.8rem] animate-spin text-[#3B9DF8]" />}
>
<img src={skill?.image} style={{ width: 50, marginTop: -5, backgroundColor: '#fff', borderRadius: '100%' }} alt="" />

</HideUntilLoaded>
        
      </CircularProgressbarWithChildren>
     
    </div>
          </div>
        ))}
      </div>
    
</div>
);
};
export default Skills;