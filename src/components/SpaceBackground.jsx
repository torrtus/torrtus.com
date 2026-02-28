import { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouse = { x: width / 2, y: height / 2 };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const stars = [];
    const numStars = 200;
    const entities = [];
    const lasers = [];

    // Colors matching Phase 3
    const colorPink1 = '#c1628d';
    const colorPink3 = '#da66a7';
    const colorText = '#ffffff';

    class Star {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.color = Math.random() > 0.8 ? colorPink3 : Math.random() > 0.6 ? colorPink1 : 'rgba(255, 255, 255, 0.6)';
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        // Continuous slow drift
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        // Wrap around
        if (this.baseX < 0) this.baseX = width;
        if (this.baseX > width) this.baseX = 0;
        if (this.baseY < 0) this.baseY = height;
        if (this.baseY > height) this.baseY = 0;

        // Interactive parallax effect
        let dx = mouse.x - width / 2;
        let dy = mouse.y - height / 2;
        
        let distanceX = dx / this.density;
        let distanceY = dy / this.density;

        this.x = this.baseX - distanceX;
        this.y = this.baseY - distanceY;

        // Add shooting star effect occasionally
        if (Math.random() < 0.0001) {
            this.speedX = (Math.random() - 0.5) * 10;
            this.speedY = (Math.random() - 0.5) * 10;
            this.color = 'white';
            this.size = 3;
            setTimeout(() => {
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.speedY = (Math.random() - 0.5) * 0.2;
                this.color = Math.random() > 0.8 ? colorPink3 : Math.random() > 0.6 ? colorPink1 : 'rgba(255, 255, 255, 0.6)';
                this.size = Math.random() * 2;
            }, 500);
        }

        this.draw();
      }
    }

    class Laser {
      constructor(x, y, targetX, targetY, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.atan2(targetY - y, targetX - x);
        this.vx = Math.cos(angle) * 15;
        this.vy = Math.sin(angle) * 15;
        this.life = 1.0;
        this.length = 20;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 0.02;

        ctx.strokeStyle = `rgba(${this.color === colorPink3 ? '218,102,167' : '193,98,141'}, ${this.life})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.vx * 2, this.y - this.vy * 2);
        ctx.stroke();
      }
    }

    class Entity {
      constructor(type) {
        this.type = type; // 'rocket' or 'ufo'
        this.x = Math.random() > 0.5 ? -50 : width + 50;
        this.y = Math.random() * height;
        const targetX = width / 2 + (Math.random() - 0.5) * 400;
        const targetY = height / 2 + (Math.random() - 0.5) * 400;
        const angle = Math.atan2(targetY - this.y, targetX - this.x);
        
        const speed = this.type === 'rocket' ? 4 : 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        
        this.size = this.type === 'rocket' ? 4 : 8;
        this.color = this.type === 'rocket' ? colorPink1 : colorPink3;
        this.active = true;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Randomly shoot
        if (Math.random() < 0.01) {
          const targetX = this.x + this.vx * 50 + (Math.random() - 0.5) * 200;
          const targetY = this.y + this.vy * 50 + (Math.random() - 0.5) * 200;
          lasers.push(new Laser(this.x, this.y, targetX, targetY, this.color));
        }

        // Draw depending on type
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        
        if (this.type === 'rocket') {
          ctx.fillRect(this.x, this.y, this.size * 2, this.size);
        } else {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.shadowBlur = 0;

        if (this.x < -100 || this.x > width + 100 || this.y < -100 || this.y > height + 100) {
          this.active = false;
        }
      }
    }

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Add a subtle gradient matching Phase 3
      const gradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, height
      );
      gradient.addColorStop(0, 'rgba(47, 36, 57, 0.4)'); // --pink-6 equivalent
      gradient.addColorStop(1, 'rgba(9, 3, 11, 1)'); // --bg-dark equivalent
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Randomly spawn fighting entities
      if (Math.random() < 0.005 && entities.length < 5) {
        entities.push(new Entity(Math.random() > 0.5 ? 'rocket' : 'ufo'));
      }

      for (let i = 0; i < stars.length; i++) {
        stars[i].update();
      }

      for (let i = entities.length - 1; i >= 0; i--) {
        entities[i].update();
        if (!entities[i].active) entities.splice(i, 1);
      }

      for (let i = lasers.length - 1; i >= 0; i--) {
        lasers[i].update();
        if (lasers[i].life <= 0) lasers.splice(i, 1);
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    initStars();
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
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
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default SpaceBackground;
