"use client";

import { useEffect, useRef } from 'react';

const NeuralPulse = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Neural network nodes
    const nodes: { x: number; y: number; connections: number[]; pulseIntensity: number }[] = [];
    const numNodes = 50;

    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
        pulseIntensity: 0
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() < 0.1) { // 10% chance of connection
          node.connections.push(j);
        }
      }
    });

    // Animation variables
    let activePulses: { sourceNode: number; targetNode: number; progress: number }[] = [];
    let lastTime = 0;

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Clear canvas
      ctx.fillStyle = 'rgba(10, 15, 30, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Random pulse generation
      if (Math.random() < 0.05) { // 5% chance per frame
        const sourceNode = Math.floor(Math.random() * nodes.length);
        nodes[sourceNode].connections.forEach(targetNode => {
          activePulses.push({
            sourceNode,
            targetNode,
            progress: 0
          });
        });
      }

      // Update and draw pulses
      activePulses = activePulses.filter(pulse => {
        pulse.progress += deltaTime;
        
        const source = nodes[pulse.sourceNode];
        const target = nodes[pulse.targetNode];
        
        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);
        
        // Gradient for pulse effect
        const gradient = ctx.createLinearGradient(source.x, source.y, target.x, target.y);
        const alpha = Math.sin(pulse.progress * Math.PI) * 0.5;
        gradient.addColorStop(pulse.progress, `rgba(64, 128, 255, ${alpha})`);
        gradient.addColorStop(Math.min(pulse.progress + 0.1, 1), 'rgba(64, 128, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Update node pulse intensities
        if (pulse.progress < 0.5) {
          nodes[pulse.sourceNode].pulseIntensity = Math.max(nodes[pulse.sourceNode].pulseIntensity, 1 - pulse.progress * 2);
        } else {
          nodes[pulse.targetNode].pulseIntensity = Math.max(nodes[pulse.targetNode].pulseIntensity, (pulse.progress - 0.5) * 2);
        }

        return pulse.progress < 1;
      });

      // Draw nodes
      nodes.forEach(node => {
        // Node glow
        const radius = 4 + node.pulseIntensity * 4;
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius);
        gradient.addColorStop(0, `rgba(64, 128, 255, ${0.5 + node.pulseIntensity * 0.5})`);
        gradient.addColorStop(1, 'rgba(64, 128, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Decay pulse intensity
        node.pulseIntensity *= 0.95;
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
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