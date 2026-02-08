'use client';

import React from 'react';

export default function VoiceAssistant() {
    return (
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden rounded-2xl">
            {/* Core Glow */}
            <div className="absolute w-64 h-64 bg-purple-600 rounded-full blur-[80px] opacity-40 animate-pulse"></div>

            {/* Inner Blob (Main Core) */}
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 animate-blob mix-blend-screen shadow-[0_0_50px_rgba(168,85,247,0.5)]"></div>

            {/* Orbiting Blobs/Rings */}
            <div className="absolute w-48 h-48 border-2 border-purple-500/30 rounded-full animate-[spin_4s_linear_infinite] border-t-transparent border-l-transparent"></div>
            <div className="absolute w-64 h-64 border border-indigo-500/20 rounded-full animate-[spin_8s_linear_infinite_reverse] border-b-transparent border-r-transparent"></div>

            {/* Floating Particles */}
            <div className="absolute w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float-wide opacity-50"></div>
                <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce opacity-40"></div>
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-pink-300 rounded-full animate-pulse opacity-60"></div>
            </div>

            {/* Sound Waves (Visual Representation) */}
            <div className="absolute flex items-center justify-center gap-1">
                <div className="w-1 h-8 bg-white/80 rounded-full animate-[ping_1.5s_ease-in-out_infinite]"></div>
                <div className="w-1 h-12 bg-white/80 rounded-full animate-[ping_1.2s_ease-in-out_infinite_0.1s]"></div>
                <div className="w-1 h-6 bg-white/80 rounded-full animate-[ping_1.8s_ease-in-out_infinite_0.2s]"></div>
            </div>

            {/* Equalizer Bars Overlay */}
            <div className="absolute flex items-center gap-1.5 opacity-80 mix-blend-overlay">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1.5 bg-white rounded-full animate-equalizer" style={{ height: '40px', animationDelay: `${i * 0.1}s` }}></div>
                ))}
            </div>
        </div>
    );
}
