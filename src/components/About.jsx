import React, { useState } from 'react';
import Scroll from './Scroll';


const About = () => {
   const [ scrollActive, setScrollActive ] = useState();

   return (
      <Scroll className={'About'} scrollActive={scrollActive} setScrollActive={setScrollActive}>
         <div className="container">
            
         </div>
      </Scroll>
   );
};

export default About;