import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const TriangleAlert = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    /* 1. Updated viewBox to match the 24x22 source */
    viewBox="0 0 24 22" 
 
  >
    {/* 3. The main triangle body */}
    <path d="M11.134 1.5C11.5189 0.833334 12.4811 0.833333 12.866 1.5L21.5263 16.5C21.9112 17.1667 21.4301 18 20.6603 18H3.33975C2.56995 18 2.08882 17.1667 2.47372 16.5L11.134 1.5Z" />
    
    {/* 4. The exclamation point stem (stroke) */}
    <path d="M11.9 7V12.4" strokeLinecap="round" />
    
    {/* 5. The exclamation point dot (filled solid) */}
    <circle 
      cx="11.9" 
      cy="15.1" 
      r="0.9" 
      fill={props.color || 'currentColor'} 
      stroke="none" 
    />
  </IconWrapper>
);