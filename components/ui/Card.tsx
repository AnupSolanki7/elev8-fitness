import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false }) => {
    return (
        <div
            className={`
        glass-card rounded-2xl p-6 relative overflow-hidden
        ${hoverEffect ? 'hover:bg-white/5 transition-colors duration-300' : ''}
        ${className}
      `}
        >
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
