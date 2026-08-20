import React, { useEffect, useRef } from 'react';
import { useNetworkFlow, networkFlowConfig } from '../hooks/useNetworkFlow';

const NetworkFlowBackground = ({
  nodeCount = networkFlowConfig.baseNodeCount,
  connectionDistance = networkFlowConfig.connectionDistance,
  accentColors = networkFlowConfig.accentColors,
  interactionStrength = networkFlowConfig.interactionStrength,
  opacity = networkFlowConfig.opacity,
}) => {
  const canvasRef = useRef(null);
  useNetworkFlow(canvasRef, { nodeCount, connectionDistance, accentColors, interactionStrength, opacity });

  const canvasStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
    opacity: Math.max(opacity, 0.8),
  };

  const wrapperStyle = {
    position: 'fixed',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
    background: (function(){
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      return theme === 'light'
        ? 'radial-gradient(circle at 20% 20%, rgba(0,0,0,0.06), transparent 40%), radial-gradient(circle at 80% 15%, rgba(0,0,0,0.04), transparent 36%)'
        : 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03), transparent 40%), radial-gradient(circle at 80% 15%, rgba(255,255,255,0.02), transparent 36%)';
    })(),
  };

  useEffect(() => {
    const pulseBackground = () => {
      window.dispatchEvent(new CustomEvent('portfolio:network-pulse', { detail: { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 } }));
    };

    const handleCardClick = (event) => {
      const card = event.target.closest('[data-network-pulse]');
      if (card) {
        pulseBackground();
      }
    };

    document.addEventListener('click', handleCardClick);
    return () => document.removeEventListener('click', handleCardClick);
  }, []);

  return (
    <div style={wrapperStyle} aria-hidden="true">
      <canvas ref={canvasRef} style={canvasStyle} />
    </div>
  );
};

export default NetworkFlowBackground;
