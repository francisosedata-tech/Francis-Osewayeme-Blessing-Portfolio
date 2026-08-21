import React, { useState, MouseEvent } from 'react';
import { ArrowRight } from 'lucide-react';

interface MadButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  icon?: React.ReactNode;
  showArrow?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  id?: string;
}

export const MadButton: React.FC<MadButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  icon,
  showArrow = true,
  type = 'button',
  disabled = false,
  id
}) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) {
      onClick(e);
    }
  };

  const variantClass = variant === 'primary' 
    ? 'mad-btn-primary' 
    : variant === 'outline' 
    ? 'mad-btn-outline' 
    : 'mad-btn-ghost';

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`mad-btn-base group ${variantClass} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {/* Ink Ripple Elements */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple-circle"
          style={{
            left: r.x - 20,
            top: r.y - 20,
            width: 40,
            height: 40,
          }}
        />
      ))}

      {/* Optional Leading Icon */}
      {icon && <span className="mr-3 transition-transform duration-200 group-hover:scale-110">{icon}</span>}

      {/* Button Content Text */}
      <span className="relative z-10">{children}</span>

      {/* Trailing Animated Arrow */}
      {showArrow && (
        <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
      )}
    </button>
  );
};
