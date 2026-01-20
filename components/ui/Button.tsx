import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variants = {
    primary: "bg-cyan-400 hover:bg-cyan-300 text-slate-900 shadow-[0_0_20px_rgba(0,212,255,0.5)] hover:shadow-[0_0_30px_rgba(0,212,255,0.7)] border border-cyan-400",
    secondary: "bg-teal-600 hover:bg-teal-500 text-white shadow-lg hover:shadow-teal-500/30",
    outline: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
