"use client";

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  connections: number[];
  pulseIntensity: number;
}

interface Pulse {
  sourceNode: number;
  targetNode: number;
  progress: number;
}

const NeuralPulse = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with device pixel ratio for high resolution
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // Reinitialize nodes when canvas size changes
      initializeNodes();
    };

    const initializeNodes = () => {
      const numNodes = 30;
      nodesRef.current = [];

      for (let i = 0; i < numNodes; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: [],
          pulseIntensity: 0
        });
      }

      // Create connections
      nodesRef.current.forEach((node, i) => {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const dx = nodesRef.current[j].x - node.x;
          const dy = nodesRef.current[j].y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < canvas.width * 0.3 && Math.random() < 0.15) {
            node.connections.push(j);
          }
        }
      });
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let activePulses: Pulse[] = [];
    let lastTime = 0;

    const animate = (currentTime: number) => {
      if (!canvas || !ctx) return;

      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Clear canvas with slight fade effect
      ctx.fillStyle = 'rgba(10, 15, 30, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Random pulse generation
      if (Math.random() < 0.03) {
        const sourceNode = Math.floor(Math.random() * nodesRef.current.length);
        nodesRef.current[sourceNode].connections.forEach((targetNode: number) => {
          activePulses.push({
            sourceNode,
            targetNode,
            progress: 0
          });
        });
      }

      // Update and draw pulses
      activePulses = activePulses.filter(pulse => {
        pulse.progress += deltaTime * 0.5;
        
        const source = nodesRef.current[pulse.sourceNode];
        const target = nodesRef.current[pulse.targetNode];
        
        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);
        
        const gradient = ctx.createLinearGradient(source.x, source.y, target.x, target.y);
        const alpha = Math.sin(pulse.progress * Math.PI) * 0.7;
        // Clamp progress values between 0 and 1
        const progressStart = Math.min(Math.max(pulse.progress, 0), 1);
        const progressEnd = Math.min(Math.max(progressStart + 0.1, 0), 1);
        
        gradient.addColorStop(progressStart, `rgba(64, 128, 255, ${alpha})`);
        gradient.addColorStop(progressEnd, 'rgba(64, 128, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (pulse.progress < 0.5) {
          nodesRef.current[pulse.sourceNode].pulseIntensity = Math.max(nodesRef.current[pulse.sourceNode].pulseIntensity, 1 - pulse.progress * 2);
        } else {
          nodesRef.current[pulse.targetNode].pulseIntensity = Math.max(nodesRef.current[pulse.targetNode].pulseIntensity, (pulse.progress - 0.5) * 2);
        }

        return pulse.progress < 1;
      });

      // Draw nodes
      nodesRef.current.forEach(node => {
        const radius = 3 + node.pulseIntensity * 3;
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius);
        gradient.addColorStop(0, `rgba(64, 128, 255, ${0.7 + node.pulseIntensity * 0.3})`);
        gradient.addColorStop(0.5, `rgba(64, 128, 255, ${0.3 * node.pulseIntensity})`);
        gradient.addColorStop(1, 'rgba(64, 128, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();

        node.pulseIntensity *= 0.97;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default NeuralPulse; 