'use client';

import React, { useState, useEffect } from 'react';

const messages = [
    { id: 1, text: "What services does FueOps provide?", sender: 'user', delay: 500 },
    { id: 2, text: "We provide software integrated with the newest technologies, including AI.", sender: 'ai', delay: 2000 },
    { id: 3, text: "Can it help streamline our operations?", sender: 'user', delay: 4000 },
    { id: 4, text: "Yes! Our intelligent systems optimize workflows instantly.", sender: 'ai', delay: 6000 },
];

export default function TextingAnimation() {
    const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        // Set initial time
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
        };
        updateTime();
        const timeInterval = setInterval(updateTime, 60000);

        let timeouts: NodeJS.Timeout[] = [];

        const runAnimation = () => {
            setVisibleMessages([]);
            setIsTyping(false);

            let timeline = 0;

            messages.forEach((msg) => {
                if (msg.sender === 'ai') {
                    const typingStart = timeline + msg.delay - 1500;
                    timeouts.push(setTimeout(() => setIsTyping(true), typingStart));
                    timeouts.push(setTimeout(() => setIsTyping(false), timeline + msg.delay));
                }

                timeline += msg.delay;
                timeouts.push(setTimeout(() => {
                    setVisibleMessages(prev => [...prev, msg.id]);
                }, timeline));
            });

            timeouts.push(setTimeout(runAnimation, timeline + 5000));
        };

        runAnimation();

        return () => {
            timeouts.forEach(clearTimeout);
            clearInterval(timeInterval);
        };
    }, []);

    return (
        <div className="relative w-full max-w-[360px] mx-auto h-[700px] bg-black border-[8px] border-neutral-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col font-sans select-none ring-1 ring-white/10">

            {/* Dynamic Island / Status Bar */}
            {/* Dynamic Island / Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 z-50 pointer-events-none">
                {/* Time */}
                <span className="absolute top-5 left-10 text-white font-semibold text-[15px] z-50">
                    {currentTime || '9:41'}
                </span>

                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 h-[28px] w-[110px] bg-black rounded-full z-50 pointer-events-auto shadow-[0_0_20px_#761FE3]"></div>

                {/* Icons */}
                <div className="absolute top-5 right-10 flex items-center gap-1.5 z-50">
                    <i className="fa-solid fa-signal text-white text-[12px]"></i>
                    <i className="fa-solid fa-wifi text-white text-[12px]"></i>
                    <i className="fa-solid fa-battery-full text-white text-[12px]"></i>
                </div>
            </div>

            {/* Header */}


            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-8 no-scrollbar relative z-10 scroll-smooth">
                {/* Header Text (Moved) */}

                {/* Date Divider */}
                <div className="flex justify-center my-4">
                    <span className="text-white/30 text-[10px] font-medium uppercase tracking-widest mt-2">Today</span>
                </div>

                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex w-full items-end gap-5 transition-all duration-500 ease-out ${visibleMessages.includes(msg.id)
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 translate-y-8 scale-95'
                            } ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {/* AI Avatar Small */}
                        {msg.sender === 'ai' && (
                            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#761FE3] to-[#FF2E93] flex-shrink-0 mb-1"></div>
                        )}

                        <div
                            className={`max-w-[75%] px-3 py-2 text-[12px] leading-relaxed relative ${msg.sender === 'user'
                                ? 'bg-gradient-to-br from-[#761FE3] to-[#FF2E93] text-white rounded-2xl rounded-tr-sm shadow-lg shadow-purple-900/20'
                                : 'bg-[#1C1C1E] text-gray-100 rounded-2xl rounded-tl-sm border border-white/5'
                                }`}
                        >
                            {msg.text}
                        </div>

                        {/* User Avatar Small */}
                        {msg.sender === 'user' && (
                            <div className="w-6 h-6 rounded-full bg-neutral-700 flex-shrink-0 mb-1 flex items-center justify-center overflow-hidden">
                                <i className="fa-solid fa-user text-[10px] text-white/50"></i>
                            </div>
                        )}
                    </div>
                ))}

                {/* Typing Bubble */}
                {isTyping && (
                    <div className="flex w-full items-end gap-2 animate-fade-in">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#761FE3] to-[#FF2E93] flex-shrink-0 mb-1"></div>
                        <div className="bg-[#1C1C1E] border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5 min-w-[60px]">
                            <span className="w-1.5 h-1.5 bg-gray-400/80 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400/80 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400/80 rounded-full animate-bounce"></span>
                        </div>
                    </div>
                )}
                <div className="h-4"></div>
            </div>

            {/* Input Area */}
            <div className="px-5 pb-8 pt-3 bg-black z-30">
                <div className="flex items-center gap-2 bg-[#1C1C1E] rounded-full px-2 py-2 border border-neutral-800/50">
                    <button className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors flex-shrink-0 rounded-full">
                        <i className="fa-solid fa-camera text-[16px]"></i>
                    </button>

                    <div className="flex-1 text-white/30 text-[15px] px-2 font-normal truncate">
                        iMessage
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                        <button className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors rounded-full">
                            <i className="fa-solid fa-microphone text-[16px]"></i>
                        </button>
                        <button className="w-[28px] h-[28px] bg-[#761FE3] !rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform flex-shrink-0 overflow-hidden">
                            <i className="fa-solid fa-arrow-up text-[11px] font-bold"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-[-10%] right-[-20%] w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-[-10%] left-[-20%] w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
        </div>
    );
}
