import { useEffect, useRef } from 'react';

function StarryBackground() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Star properties
    const stars = [];
    const starCount = 100; // Medium amount of stars
    
    // Create stars with varying properties
    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      // Generate different star types
      const starType = Math.random();
      let color, radius, twinkleSpeed;
      
      if (starType > 0.9) {
        // Slightly larger star
        radius = 1.2 + Math.random();
        color = `rgba(${200 + Math.random() * 55}, ${220 + Math.random() * 35}, 255, 1)`;
        twinkleSpeed = 0.01 + Math.random() * 0.02;
      } else {
        // Regular star
        radius = 0.5 + Math.random() * 0.7;
        color = 'rgba(255, 255, 255, 1)';
        twinkleSpeed = 0.005 + Math.random() * 0.01;
      }
      
      stars.push({
        x,
        y,
        radius,
        opacity: 0.1 + Math.random() * 0.7,
        speed: twinkleSpeed,
        direction: Math.random() > 0.5 ? 1 : -1,
        color
      });
    }
    
    // Draw a single star
    const drawStar = (x, y, radius, opacity, color) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color.replace('1)', `${opacity})`);
      ctx.fill();
    };
    
    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        drawStar(star.x, star.y, star.radius, star.opacity, star.color);
        
        // Update star opacity for twinkling effect
        star.opacity += star.speed * star.direction;
        
        // Change direction if opacity reaches bounds
        if (star.opacity <= 0.1 || star.opacity >= 0.8) {
          star.direction *= -1;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}

export default StarryBackground; 