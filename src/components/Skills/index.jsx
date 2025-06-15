import { Row } from "react-bootstrap";
import {GSskills} from '../../content_option'
import './style.css'
// Animation
import SectionTitle from "../SectionTitle/SectionTitle";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";

const Skills = () => {


return (
<div className="container mx-auto" style={{margin: '100px 0px 150px'}}> 
    
     <Row>
              
               <SectionTitle title={"My Experties"}/>
                <hr className="t_border my-4 ml-0 text-left" />
              
            </Row>
    
      <div className="skills-grid mb-[200px] justify-center items-center">
        {GSskills.map((skill, i) => (
          <div key={i} className="skill-item" data-aos="zoom-in" data-aos-duration="300">
        

      <CircularProgressBar
 colorCircle="#4a4a4a"
 round
colorSlice={skill.sliceColor}
size={135}
fontSize="0em"
percent={skill.value}
fontColor='#ffffff'
>
<img
alt="Random"
src={skill.image}
style={{
 
  borderRadius: '50%',
  left: '65%',
  padding: '2px',
  position: 'absolute',
  bottom: '-50%',
  transform: 'translate(-90%, -180%)',
  width: '60px',
  height: '60px',
  
}}

/>
</CircularProgressBar>
     
    </div>
        ))}
      </div>
    
</div>
);
};
export default Skills;