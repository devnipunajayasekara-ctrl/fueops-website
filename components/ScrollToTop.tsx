'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            setProgress(scrollPercent);
            setIsVisible(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Calculate stroke dashoffset based on progress
    const pathLength = 307.919; // Approximate path length for a 49-radius circle
    const offset = pathLength - (progress / 100) * pathLength;

    return (
        <div
            className={`progress-wrap ${isVisible ? 'active-progress' : ''}`}
            onClick={scrollToTop}
            style={{ cursor: 'pointer' }}
        >
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{
                        strokeDasharray: `${pathLength} ${pathLength}`,
                        strokeDashoffset: offset,
                        transition: 'stroke-dashoffset 10ms linear'
                    }}
                />
            </svg>
        </div>
    );
}
