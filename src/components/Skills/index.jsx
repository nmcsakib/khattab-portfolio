import { Row } from "react-bootstrap";
import {GSskills} from '../../content_option'
import './style.css'
// Animation
import SectionTitle from "../SectionTitle/SectionTitle";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";

const Skills = () => {


return (
<div className="container" style={{marginBottom: '150px'}}> 
    
     <Row className="mt-3 pt-md-3">
              
               <SectionTitle title={"My Experties"}/>
                <hr className="t_border my-4 ml-0 text-left" />
              
            </Row>
    
      <div className="skills-grid mb-[200px]">
        {GSskills.map((skill, i) => (
          <div key={i} className="skill-item" data-aos="zoom-in" data-aos-duration="300">
           <div label="Arbitrary content" style={{ width: 100, height: 100 }}>

    
         {/* <CircularProgressbarWithChildren value={skill.value} styles={buildStyles({
            pathColor: skill.sliceColor
         })}
 round>
       
        <HideUntilLoaded
  imageToLoad={skill.image}
   
          
  Spinner={() =>     <FiLoader className="text-[2.8rem] animate-spin text-[#3B9DF8]" />}
>
<img src={skill?.image} alt="" />

</HideUntilLoaded>
        
      </CircularProgressbarWithChildren> */}

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
  transform: 'translate(-50%, -90%)',
  width: '60px',
  height: '60px',
  
}}

/>
</CircularProgressBar>
     
    </div>
          </div>
        ))}
      </div>
    
</div>
);
};
export default Skills;