import React, { useState } from 'react';
import Scroll from './Scroll';
import ProjectSwiper from './ProjectSwiper';
import './ProjectSwiper.scss'
import FlowText from './FlowText';



const Project = () => {
   const [ scrollActive, setScrollActive ] = useState();
   return (
      <Scroll className={'Project'} scrollActive={scrollActive} setScrollActive={setScrollActive}>
         {/* <div className="container"> */}
            <h2><FlowText /></h2>
            <ProjectSwiper />
         {/* </div> */}
      </Scroll>
   );
};

export default Project;