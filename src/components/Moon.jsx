import { useEffect, useRef } from 'react';
import '../styles/Moon.css';

function Moon() {
  const moonRef = useRef(null);
  
  useEffect(() => {
    const moon = moonRef.current;
    
    // Subtle floating animation for the moon
    const floatAnimation = () => {
      let position = 0;
      let direction = 1;
      let speed = 0.15;
      
      const animate = () => {
        position += speed * direction;
        
        // Change direction when reaching bounds
        if (position > 10 || position < -10) {
          direction *= -1;
        }
        
        // Apply subtle floating movement
        moon.style.transform = `translateY(${position}px)`;
        requestAnimationFrame(animate);
      };
      
      animate();
    };
    
    floatAnimation();
  }, []);
  
  return (
    <div className="moon-container">
      <div ref={moonRef} className="moon">
        <div className="crater crater-1"></div>
        <div className="crater crater-2"></div>
        <div className="crater crater-3"></div>
        <div className="crater crater-4"></div>
        <div className="crater crater-5"></div>
      </div>
      <div className="moon-glow"></div>
    </div>
  );
}

export default Moon; 