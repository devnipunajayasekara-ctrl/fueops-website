'use client';

import { useState } from 'react';

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default to first item open

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <ul className="accordion-box_two">
            {items.map((item, index) => (
                <li key={index} className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}>
                    <div
                        className={`acc-btn ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        <div className="icon-outer">
                            <span className="icon icon-plus fa-solid fa-plus fa-fw"></span>
                        </div>
                        {item.question}
                    </div>
                    <div className={`acc-content ${activeIndex === index ? 'current' : ''}`} style={{ display: activeIndex === index ? 'block' : 'none' }}>
                        <div className="content">
                            <div className="text">{item.answer}</div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
