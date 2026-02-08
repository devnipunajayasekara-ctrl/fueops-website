'use client';

import { useEffect, useState, useRef } from 'react';

export default function MouseParticles() {
    const [mounted, setMounted] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const isInside =
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom;

            if (isInside) {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                });
            } else {
                setMousePosition({ x: 0, y: 0 });
            }
        };

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const particles = [
        { top: 25, left: 5, color: 'bg-purple-500', size: 'w-2 h-2', anim: 'animate-float-wide', delay: '' },
        { top: 67, left: 90, color: 'bg-pink-500', size: 'w-3 h-3', anim: 'animate-float-wide', delay: 'animation-delay-2000' },
        { top: 5, left: 75, color: 'bg-white', size: 'w-1 h-1', anim: 'animate-blob', delay: 'animation-delay-4000' },
        { top: 33, left: 95, color: 'bg-pink-400', size: 'w-2 h-2', anim: 'animate-blob', delay: 'animation-delay-3000' },
        { top: 98, left: 50, color: 'bg-white', size: 'w-1.5 h-1.5', anim: 'animate-float-wide', delay: 'delay-500' },
        { top: 15, left: 15, color: 'bg-indigo-400', size: 'w-1.5 h-1.5', anim: 'animate-blob', delay: 'delay-1000' },
        { top: 85, left: 10, color: 'bg-purple-300', size: 'w-2 h-2', anim: 'animate-float-wide', delay: 'animation-delay-1500' },
        { top: 45, left: 85, color: 'bg-pink-300', size: 'w-1 h-1', anim: 'animate-blob', delay: 'delay-2000' },
        { top: 10, left: 40, color: 'bg-white', size: 'w-1 h-1', anim: 'animate-float-wide', delay: 'animation-delay-3500' },
        { top: 80, left: 80, color: 'bg-indigo-500', size: 'w-2 h-2', anim: 'animate-blob', delay: 'delay-3000' },
        { top: 55, left: 20, color: 'bg-purple-600', size: 'w-1.5 h-1.5', anim: 'animate-float-wide', delay: 'animation-delay-500' },
        { top: 30, left: 60, color: 'bg-pink-600', size: 'w-2 h-2', anim: 'animate-blob', delay: 'delay-4000' },
    ];

    const calculateTransform = (p: typeof particles[0], index: number) => {
        // Disable mouse follow on mobile/tablet (width < 1024px)
        if (!mounted || windowSize.width < 1024) {
            return 'translate(0px, 0px)';
        }

        const initialX = (p.left / 100) * windowSize.width;
        const initialY = (p.top / 100) * windowSize.height;

        // If mouse is not in hero or at 0,0, just use minor float animation (handled by CSS)
        if (mousePosition.x === 0 && mousePosition.y === 0) {
            return 'translate(0px, 0px)';
        }

        // Full Screen Parallax / Magnetic Effect
        // Instead of gathering around the mouse, particles stay in their global spots
        // but react to the mouse position by moving slightly towards/away from it.

        // Calculate distance from particle to mouse
        const dx = mousePosition.x - initialX;
        const dy = mousePosition.y - initialY;

        // Parallax factor: taller/larger particles might move more (optional), 
        // effectively creating depth.
        // We divide by a large number to make the movement subtle but noticeable.
        // Negative factor makes them move AWAY from mouse (depth background), 
        // Positive makes them move TOWARDS mouse (foreground).

        const movementFactor = 0.05; // 5% of distance

        const moveX = dx * movementFactor;
        const moveY = dy * movementFactor;

        return `translate(${moveX}px, ${moveY}px)`;
    };

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p, i) => (
                <div
                    key={i}
                    className="absolute transition-transform duration-500 ease-out"
                    style={{
                        top: `${p.top}%`,
                        left: `${p.left}%`,
                        transform: calculateTransform(p, i)
                    }}
                >
                    <div className={`${p.size} ${p.color} rounded-full ${p.anim} ${p.delay} opacity-60`}></div>
                </div>
            ))}
        </div>
    );
}
