"use client";

import React, { useEffect, useRef } from 'react';

const GlobalNetworkAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        // Configuration
        const globeRadius = 180;
        const globeCenterZ = -globeRadius;
        const perspective = 800;
        const particleCount = 400;
        const particles: any[] = [];
        const connectionDistance = 60;

        // Colors
        const primaryColor = { r: 118, g: 31, b: 227 }; // #761FE3
        const secondaryColor = { r: 147, g: 51, b: 234 }; // Lighter purple

        // Resize handler
        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientWidth; // Keep aspect ratio 1:1
            }
        };

        window.addEventListener('resize', resize);
        resize();

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos((Math.random() * 2) - 1);

            const x = globeRadius * Math.sin(phi) * Math.cos(theta);
            const y = globeRadius * Math.sin(phi) * Math.sin(theta);
            const z = globeRadius * Math.cos(phi);

            particles.push({ x, y, z, originalX: x, originalY: y, originalZ: z });
        }

        let angleY = 0;
        let angleX = 0;

        const render = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            // Rotate globe
            angleY += 0.003;
            angleX += 0.001;

            const sinY = Math.sin(angleY);
            const cosY = Math.cos(angleY);
            const sinX = Math.sin(angleX);
            const cosX = Math.cos(angleX);

            // Sort particles by Z depth for correct rendering order
            particles.forEach(p => {
                // Rotation Y
                let x1 = p.originalX * cosY - p.originalZ * sinY;
                let z1 = p.originalZ * cosY + p.originalX * sinY;

                // Rotation X
                let y1 = p.originalY * cosX - z1 * sinX;
                let z2 = z1 * cosX + p.originalY * sinX;

                p.transformedX = x1;
                p.transformedY = y1;
                p.transformedZ = z2;

                const scale = perspective / (perspective + z2 - globeCenterZ);
                p.screenX = cx + x1 * scale;
                p.screenY = cy + y1 * scale;
                p.scale = scale;
                p.alpha = Math.max(0.1, (z2 + globeRadius) / (2 * globeRadius)); // Fade out back particles
            });

            // Draw connections
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                if (p1.alpha < 0.3) continue; // Skip connections for back particles

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    if (p2.alpha < 0.3) continue;

                    const dx = p1.transformedX - p2.transformedX;
                    const dy = p1.transformedY - p2.transformedY;
                    const dz = p1.transformedZ - p2.transformedZ;
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    if (dist < connectionDistance) {
                        const opacity = (1 - dist / connectionDistance) * p1.alpha * 0.4;
                        ctx.strokeStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${opacity})`;
                        ctx.beginPath();
                        ctx.moveTo(p1.screenX, p1.screenY);
                        ctx.lineTo(p2.screenX, p2.screenY);
                        ctx.stroke();
                    }
                }
            }

            // Draw particles
            particles.forEach(p => {
                const size = 1.5 * p.scale;
                ctx.fillStyle = `rgba(${secondaryColor.r}, ${secondaryColor.g}, ${secondaryColor.b}, ${p.alpha})`;
                ctx.beginPath();
                ctx.arc(p.screenX, p.screenY, size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw glowing core
            const coreGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, globeRadius * 0.8);
            coreGradient.addColorStop(0, `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0.1)`);
            coreGradient.addColorStop(1, `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0)`);
            ctx.fillStyle = coreGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="relative flex items-center justify-center w-full h-full min-h-[400px]">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full transform scale-75"></div>

            <canvas
                ref={canvasRef}
                className="relative z-10 w-full max-w-[500px]"
            />

            {/* Floating Orbit Ring (CSS Animation) */}
            <div className="absolute w-[300px] h-[300px] animate-[spin_12s_linear_infinite]">
                <div className="w-full h-full" style={{ transform: 'rotateX(70deg)' }}>
                    <div className="w-full h-full border border-[#761FE3]/30 rounded-full animate-[spin_10s_linear_infinite]">
                        <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#761FE3] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#761FE3]"></div>
                    </div>
                </div>
            </div>

            <div className="absolute w-[400px] h-[400px] animate-[spin_15s_linear_infinite_reverse]">
                <div className="w-full h-full" style={{ transform: 'rotateX(70deg) rotateY(20deg)' }}>
                    <div className="w-full h-full border border-[#761FE3]/10 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#D093E8] rounded-full -translate-x-1/2 translate-y-1/2 shadow-[0_0_10px_#D093E8]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalNetworkAnimation;
