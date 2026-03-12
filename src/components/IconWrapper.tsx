// src/components/IconWrapper.tsx
import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

const IconWrapper = ({ 
  children, 
  size = 24, 
  color = 'currentColor', 
  strokeWidth = 2,
  ...props 
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24" // Default, but overridden by the icon itself
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props} // This allows for className, style, onClick, etc.
  >
    {children}
  </svg>
);

export default IconWrapper;