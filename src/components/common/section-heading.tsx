import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  update: (canvas: HTMLCanvasElement) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const controls = useAnimation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Particle[] = [];
    const particleCount = 100;

    class ParticleImpl implements Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `rgba(255, 191, 0, ${Math.random() * 0.5 + 0.5})`;
      }

      update(canvas: HTMLCanvasElement) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function createParticles() {
      if (!canvas) return;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new ParticleImpl(canvas));
      }
    }

    function animateParticles() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas);
        particles[i].draw(ctx);
        if (particles[i].size <= 0.2) {
          particles[i] = new ParticleImpl(canvas);
        }
      }
      animationFrameId = requestAnimationFrame(animateParticles);
    }

    createParticles();
    animateParticles();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative py-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <motion.h2
        className="relative text-5xl md:text-7xl font-serif font-light text-stone-800 text-center mb-6"
        variants={itemVariants}
      >
        {title.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-4"
            variants={itemVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="relative text-xl md:text-2xl text-stone-600 text-center max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export { SectionHeading };
