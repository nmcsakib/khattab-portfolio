import { Col, Container, Row } from "react-bootstrap";
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import {GSskills} from '../../content_option'

import './style.css'
// Animation
import "react-circular-progressbar/dist/styles.css";
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {


return (
<Container> 
    
     <Row className="mb-5 mt-3 pt-md-3">
              <Col lg="8">
                <h1 className="display-4 mb-4"> My Expertise </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
              </Col>
            </Row>
      {/* <h2 className="skills-title">
        <span className="skills-subtitle">Achieved_</span>
        <span className="skills-highlight">Skills</span> during last one year
      </h2> */}
      <div className="skills-grid">
        {GSskills.map((skill, i) => (
          <div key={i} className="skill-item" data-aos="zoom-in" data-aos-duration="300">
           <div label="Arbitrary content" style={{ width: 100, height: 100 }}>

    
         <CircularProgressbarWithChildren value={skill.value} styles={buildStyles({
            pathColor: skill.sliceColor
         })}
 round>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <img title={skill.title}
          style={{ width: 50, marginTop: -5, backgroundColor: '#fff', borderRadius: '100%' }}
          src={skill.image}
          alt={skill.title}

        />
       
      </CircularProgressbarWithChildren>
     
    </div>
          </div>
        ))}
      </div>

      {/* <div className="skills-effect"></div> */}
    
</Container>
);
};
export default Skills;