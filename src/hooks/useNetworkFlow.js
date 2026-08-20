import { useEffect, useRef } from 'react';

export const networkFlowConfig = {
  baseNodeCount: 54,
  mobileNodeCount: 30,
  connectionDistance: 140,
  interactionStrength: 0.9,
  opacity: 0.48,
  accentColors: {
    teal: '#5fe0c7',
    violet: '#8a78ff',
  },
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const createNoiseTexture = (size = 120) => {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(size, size);
  const data = image.data;

  for (let i = 0; i < data.length; i += 4) {
    const value = Math.floor(Math.random() * 220);
    data[i] = value;
    data[i + 1] = value;
    data[i + 2] = value;
    data[i + 3] = Math.random() > 0.86 ? 32 : 8;
  }

  ctx.putImageData(image, 0, 0);
  return canvas;
};

export const useNetworkFlow = (canvasRef, options = {}) => {
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isReducedMotion = reducedMotionQuery.matches;
    const isMobile = window.matchMedia('(max-width: 900px)').matches;

    const config = {
      ...networkFlowConfig,
      nodeCount: optionsRef.current.nodeCount ?? networkFlowConfig.baseNodeCount,
      connectionDistance: optionsRef.current.connectionDistance ?? networkFlowConfig.connectionDistance,
      interactionStrength: optionsRef.current.interactionStrength ?? networkFlowConfig.interactionStrength,
      opacity: optionsRef.current.opacity ?? networkFlowConfig.opacity,
      accentColors: {
        ...networkFlowConfig.accentColors,
        ...(optionsRef.current.accentColors || {}),
      },
    };

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrameId = 0;
    let lastTime = 0;
    let nodes = [];
    let pulses = [];
    let pointer = { x: 0, y: 0, active: false, strength: 0 };
    let activeRegion = 0.5;
    let contactBoost = 0;
    let contactSection = null;
    let noiseTexture = createNoiseTexture();
    let paused = false;

    const buildNodes = () => {
      const count = isReducedMotion
        ? Math.max(24, isMobile ? 24 : Math.min(32, config.nodeCount))
        : Math.max(28, isMobile ? Math.min(config.nodeCount, 32) : Math.min(config.nodeCount, 56));

      const anchorPoints = [
        { x: width * 0.2, y: height * 0.22 },
        { x: width * 0.5, y: height * 0.16 },
        { x: width * 0.8, y: height * 0.28 },
        { x: width * 0.3, y: height * 0.5 },
        { x: width * 0.7, y: height * 0.5 },
        { x: width * 0.2, y: height * 0.78 },
        { x: width * 0.5, y: height * 0.86 },
        { x: width * 0.82, y: height * 0.74 },
      ];

      nodes = Array.from({ length: count }, (_, index) => {
        const anchor = anchorPoints[index % anchorPoints.length];
        const radius = 40 + (index % 5) * 18 + Math.random() * 26;
        const phase = Math.random() * Math.PI * 2;
        const speed = 0.32 + Math.random() * 0.55;
        const drift = Math.random() * Math.PI * 2;

        return {
          anchorX: anchor.x + (Math.random() - 0.5) * 120,
          anchorY: anchor.y + (Math.random() - 0.5) * 120,
          orbitRadius: radius,
          phase,
          speed,
          drift,
          angle: phase,
          size: 1.1 + Math.random() * 1.4,
          x: anchor.x,
          y: anchor.y,
        };
      });
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    };

    const updateRegion = () => {
      const scrollTop = window.scrollY || window.pageYOffset || 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      activeRegion = clamp(scrollTop / maxScroll, 0.07, 0.93);

      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight * 0.6);
        contactBoost = clamp(1 - distance / 600, 0, 1);
      } else {
        contactBoost = 0;
      }
    };

    const handlePointerMove = (event) => {
      if (isMobile || isReducedMotion) {
        return;
      }
      pointer.active = true;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.strength = 1;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      pointer.strength = 0;
    };

    const handlePulse = (event) => {
      const detail = event.detail || {};
      const sourceX = detail.x ?? window.innerWidth * 0.5;
      const sourceY = detail.y ?? window.innerHeight * 0.5;
      if (nodes.length < 2) {
        return;
      }
      const fromIndex = Math.floor(Math.random() * nodes.length);
      const toIndex = (fromIndex + 1 + Math.floor(Math.random() * Math.max(1, nodes.length - 1))) % nodes.length;
      pulses.push({
        from: nodes[fromIndex],
        to: nodes[toIndex],
        progress: 0,
        life: 1,
        sourceX,
        sourceY,
      });
    };

    const drawGrid = (time) => {
      ctx.save();
      ctx.strokeStyle = 'rgba(119, 157, 255, 0.06)';
      ctx.lineWidth = 1;
      const perspective = 120 + Math.sin(time * 0.00012) * 10;
      const step = 46;
      for (let x = -width * 0.15; x <= width * 1.15; x += step) {
        const offset = (x / width) * perspective * 0.2;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(width * 0.5 + offset, height);
        ctx.stroke();
      }
      for (let y = -height * 0.12; y <= height * 1.12; y += step) {
        const offset = (y / height) * perspective * 0.18;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, height * 0.5 + offset);
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawNoise = () => {
      ctx.save();
      ctx.globalAlpha = 0.05;
      ctx.globalCompositeOperation = 'screen';
      ctx.drawImage(noiseTexture, 0, 0, width, height);
      ctx.restore();
    };

    const drawPaths = (time) => {
      const connectionThreshold = config.connectionDistance;
      const teal = config.accentColors.teal;
      const violet = config.accentColors.violet;

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance > connectionThreshold) {
            continue;
          }

          const influence = 1 - distance / connectionThreshold;
          const bend = Math.sin(time * 0.00022 + i * 0.35 + j * 0.2) * (18 + influence * 34);
          const midX = (a.x + b.x) * 0.5 + bend;
          const midY = (a.y + b.y) * 0.5 + Math.cos(time * 0.00018 + i + j) * (12 + influence * 16);
          const alpha = (0.1 + influence * 0.26) * (0.5 + contactBoost * 0.2);

          if (pointer.active && !isMobile) {
            const px = a.x - pointer.x;
            const py = a.y - pointer.y;
            const pdx = b.x - pointer.x;
            const pdy = b.y - pointer.y;
            const near = Math.min(Math.hypot(px, py), Math.hypot(pdx, pdy));
            if (near < 140) {
              const push = (140 - near) / 140;
              ctx.globalAlpha = alpha + push * 0.08;
            }
          }

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.quadraticCurveTo(midX, midY, b.x, b.y);
          ctx.strokeStyle = distance > connectionThreshold * 0.6 ? `${violet}${Math.round(alpha * 255).toString(16).padStart(2, '0')}` : `${teal}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 0.65 + influence * 0.4;
          ctx.stroke();
        }
      }
    };

    const drawPulses = (time) => {
      pulses = pulses.filter((pulse) => pulse.progress < 1);
      pulses.forEach((pulse) => {
        pulse.progress += 0.014 + (isReducedMotion ? 0.004 : 0.01);
        const x = pulse.from.x + (pulse.to.x - pulse.from.x) * pulse.progress;
        const y = pulse.from.y + (pulse.to.y - pulse.from.y) * pulse.progress;
        const localAlpha = 0.45 * (1 - pulse.progress);
        ctx.beginPath();
        ctx.arc(x, y, 2 + pulse.progress * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(95, 224, 199, ${localAlpha})`;
        ctx.fill();
      });
    };

    const drawNodes = (time) => {
      nodes.forEach((node, index) => {
        const orbitX = Math.cos(node.angle + node.phase) * node.orbitRadius;
        const orbitY = Math.sin(node.angle * 0.7 + node.phase) * node.orbitRadius * 0.65;
        const regionShift = (activeRegion - 0.5) * 90;
        const drift = Math.sin(time * 0.0002 + node.drift) * 6;
        node.x = node.anchorX + orbitX + drift + (pointer.active && !isMobile && Math.abs(node.anchorX - pointer.x) < 200 ? (node.anchorX - pointer.x) / 220 : 0);
        node.y = node.anchorY + orbitY + regionShift + (pointer.active && !isMobile && Math.abs(node.anchorY - pointer.y) < 200 ? (node.anchorY - pointer.y) / 220 : 0);
        node.angle += node.speed * (isReducedMotion ? 0.0006 : 0.0012) * (1 + contactBoost * 0.16);

        if (pointer.active && !isMobile) {
          const dx = node.x - pointer.x;
          const dy = node.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 140) {
            const push = (140 - distance) / 140;
            node.x += dx / Math.max(1, distance) * push * config.interactionStrength * 16;
            node.y += dy / Math.max(1, distance) * push * config.interactionStrength * 16;
          }
        }

        const nodeAlpha = clamp(0.42 + contactBoost * 0.2 + influenceFromRegion(index), 0.25, 0.9);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + (contactBoost > 0.1 ? 0.55 : 0), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(95, 224, 199, ${nodeAlpha})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(138, 120, 255, ${nodeAlpha * 0.7})`;
        ctx.fill();
      });
    };

    const influenceFromRegion = (index) => {
      const regionBias = Math.sin((index / Math.max(1, nodes.length)) * Math.PI + activeRegion * 1.5) * 0.08;
      return regionBias;
    };

    const render = (time) => {
      if (paused) {
        animationFrameId = window.requestAnimationFrame(render);
        return;
      }

      if (!lastTime) {
        lastTime = time;
      }
      lastTime = time;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#030711';
      ctx.fillRect(0, 0, width, height);
      drawGrid(time);
      drawNoise();
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      drawPaths(time);
      drawPulses(time);
      drawNodes(time);
      ctx.restore();
      animationFrameId = window.requestAnimationFrame(render);
    };

    const handleVisibilityChange = () => {
      paused = document.hidden;
    };

    handleResize();
    updateRegion();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', updateRegion, { passive: true });
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('portfolio:network-pulse', handlePulse);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    contactSection = document.getElementById('contact');
    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', updateRegion);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('portfolio:network-pulse', handlePulse);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      ctx.clearRect(0, 0, width, height);
    };
  }, [canvasRef]);
};
