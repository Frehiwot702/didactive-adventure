import React, { useRef, useEffect } from "react";
import p5 from "p5";

const HerosectionBg = () => {
    const sketchRef = useRef();
    let isHovered = false;

    useEffect(() => {
      const sketch = (p) => {
        let sandParticles = []; 
        let xOff = 0;

        p.setup = () => {
          p.createCanvas(window.innerWidth, window.innerHeight).parent(sketchRef.current);
          p.background(211,211,211);
          
        };
  
        p.draw = () => {
            
            
            p.background(211,211,211); // Semi-transparent background for trail effect

        // Auto-generate new sand particles
        if (p.frameCount % 2 === 0) { // Control generation speed
          let y = p.noise(xOff) * p.width; // Random x position
          let size = p.random(2, 5); // Random size
          let speed = p.random(1, 3); // Random fall speed
          sandParticles.push({ x: 0, y, size, speed });
          xOff += 0.01;
        }

        // Update and display particles
        for (let i = 0; i < sandParticles.length; i++) {
          let particle = sandParticles[i];
          particle.x += particle.speed; // Move down

          // Add slight horizontal movement
          particle.y += p.noise(-2, 1.5); 

          // Draw particle
          p.noStroke();
          p.fill(255, 0, 0); // Sand color (yellow-orange)
          p.ellipse(particle.x, particle.y, particle.size, particle.size);
        }

        // // Smooth noise movement
        // p.fill(0, 255, 0);
        // let x = p.noise(xOff) * p.width; // Smooth movement
        // p.ellipse(p.mouseX, p.mouseY, 30, 30);
        // xOff += 0.01; //
      };

    p.keyPressed = () => {
        p.noFill()
        p.stroke(p.random(255), p.random(255), p.random(255));
        p.strokeWeight(25)
        p.rect(0, 2, window.innerWidth, window.innerHeight,25);
      }
       // Random movement
 
        // Detect when mouse enters the canvas
      
      };
  
      const myP5 = new p5(sketch, sketchRef.current);
  
      return () => {
        myP5.remove();
      };
    }, []);
  
    return <div ref={sketchRef} />;
}

export default HerosectionBg;