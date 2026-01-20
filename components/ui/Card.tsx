import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
    return (
        <div
            className={`
        glass-card rounded-2xl p-6 relative overflow-hidden
        ${hoverEffect ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,212,255,0.2)]' : ''}
        ${className}
      `}
        >
            {/* Decorative gradient blob */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
