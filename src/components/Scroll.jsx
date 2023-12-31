import React, { useEffect, useRef } from 'react';

/*
 const [ scrollActive, setScrollActive ] = useState()
 */


const Scroll = ({ children, className, scrollActive, setScrollActive }) => {
   const scrollRef = useRef(null);
   
   useEffect(() => {

      const handleScroll = () => {
         const scroll = scrollRef.current;
         if (scroll) {
            const rect = scroll.getBoundingClientRect();
            setScrollActive(rect.top <= 400 /* && rect.bottom > 400 */);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [setScrollActive]);

   return (
      <div
         ref={scrollRef}
         className={`${className} flex ${scrollActive ? 'scrollActive' : ''}`}
      >
         {children}
      </div>
   );
};

export default Scroll;
