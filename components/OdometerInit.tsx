'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function OdometerInit() {
    const pathname = usePathname();

    useEffect(() => {
        // Re-initialize odometer counters when navigating
        const initOdometers = () => {
            // Wait for scripts to be loaded
            if (typeof window !== 'undefined' && (window as any).Odometer) {
                const odometerElements = document.querySelectorAll('.odometer');

                odometerElements.forEach((element) => {
                    const htmlElement = element as HTMLElement;
                    const targetValue = htmlElement.getAttribute('data-count');

                    if (targetValue && !(htmlElement as any).odometer) {
                        // Initialize new Odometer instance only if it doesn't exist
                        try {
                            (htmlElement as any).odometer = new (window as any).Odometer({
                                el: htmlElement,
                                value: 0,
                            });

                            // Trigger animation after a short delay
                            setTimeout(() => {
                                if ((htmlElement as any).odometer && document.contains(htmlElement)) {
                                    (htmlElement as any).odometer.update(targetValue);
                                }
                            }, 100);
                        } catch (error) {
                            console.error('Error initializing odometer:', error);
                        }
                    }
                });
            }
        };

        // Wait for odometer.js to load
        const checkAndInit = () => {
            if ((window as any).Odometer) {
                initOdometers();
            } else {
                setTimeout(checkAndInit, 100);
            }
        };

        // Small delay to ensure DOM is ready
        const timer = setTimeout(checkAndInit, 200);

        return () => clearTimeout(timer);
    }, [pathname]); // Re-run when pathname changes

    return null;
}
