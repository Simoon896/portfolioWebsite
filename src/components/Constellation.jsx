import { useEffect, useRef, useState } from 'react';
import '../styles/Constellation.css';

function Constellation({ position = 'top-right', density = 'medium', animated = true }) {
  const constellationRef = useRef(null);
  const [stars, setStars] = useState([]);
  const [lines, setLines] = useState([]);
  
  // Determine number of stars based on density
  const getStarCount = () => {
    switch (density) {
      case 'low': return 5;
      case 'high': return 15;
      case 'medium':
      default: return 9;
    }
  };
  
  // Generate stars with random positions
  useEffect(() => {
    const starCount = getStarCount();
    const newStars = [];
    
    for (let i = 0; i < starCount; i++) {
      const size = 2 + Math.random() * 4;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 2;
      const opacity = 0.5 + Math.random() * 0.5;
      
      newStars.push({
        id: i,
        size,
        top,
        left,
        delay,
        opacity
      });
    }
    
    setStars(newStars);
    
    // Generate connecting lines between stars
    const newLines = [];
    const connectionProbability = 0.35; // Control how many lines to create
    
    for (let i = 0; i < starCount; i++) {
      for (let j = i + 1; j < starCount; j++) {
        if (Math.random() > connectionProbability) continue;
        
        newLines.push({
          from: i,
          to: j,
          opacity: 0.2 + Math.random() * 0.3
        });
      }
    }
    
    setLines(newLines);
  }, [density]);
  
  // Update line positions based on star positions
  useEffect(() => {
    if (lines.length === 0 || stars.length === 0) return;
    
    const updateLines = () => {
      const starElements = constellationRef.current.querySelectorAll('.constellation-star');
      const lineElements = constellationRef.current.querySelectorAll('.constellation-line');
      
      if (starElements.length === 0 || lineElements.length === 0) return;
      
      lineElements.forEach((line, index) => {
        const lineData = lines[index];
        const fromStar = starElements[lineData.from];
        const toStar = starElements[lineData.to];
        
        if (!fromStar || !toStar) return;
        
        const fromRect = fromStar.getBoundingClientRect();
        const toRect = toStar.getBoundingClientRect();
        const containerRect = constellationRef.current.getBoundingClientRect();
        
        // Calculate coordinates relative to the container
        const fromX = fromRect.left - containerRect.left + fromRect.width / 2;
        const fromY = fromRect.top - containerRect.top + fromRect.height / 2;
        const toX = toRect.left - containerRect.left + toRect.width / 2;
        const toY = toRect.top - containerRect.top + toRect.height / 2;
        
        // Calculate length and angle
        const length = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
        const angle = Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI;
        
        // Position and rotate the line
        line.style.width = `${length}px`;
        line.style.left = `${fromX}px`;
        line.style.top = `${fromY}px`;
        line.style.transform = `rotate(${angle}deg)`;
      });
    };
    
    // Update line positions after a short delay to ensure stars are rendered
    const timeoutId = setTimeout(updateLines, 100);
    
    // Also update on window resize
    window.addEventListener('resize', updateLines);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateLines);
    };
  }, [lines, stars]);
  
  useEffect(() => {
    if (!animated) return;
    
    const constellation = constellationRef.current;
    const starElements = constellation.querySelectorAll('.constellation-star');
    
    // Random animation speeds for each star
    starElements.forEach(star => {
      const randomDuration = 2 + Math.random() * 3;
      const randomDelay = Math.random() * 2;
      
      star.style.animation = `twinkle ${randomDuration}s infinite ease-in-out ${randomDelay}s`;
    });
    
    // Subtle floating animation for the entire constellation
    let position = 0;
    let direction = 1;
    let speed = 0.05;
    
    const animate = () => {
      position += speed * direction;
      
      // Change direction when reaching bounds
      if (position > 5 || position < -5) {
        direction *= -1;
      }
      
      // Apply subtle floating movement
      constellation.style.transform = `translate(${position}px, ${position}px)`;
      
      return requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [animated, stars]);
  
  return (
    <div 
      ref={constellationRef}
      className={`constellation-container ${position}`}
    >
      {stars.map(star => (
        <div 
          key={star.id}
          className="constellation-star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
      
      {lines.map((line, index) => (
        <div 
          key={`line-${index}`}
          className="constellation-line"
          style={{ opacity: line.opacity }}
        />
      ))}
    </div>
  );
}

export default Constellation; 