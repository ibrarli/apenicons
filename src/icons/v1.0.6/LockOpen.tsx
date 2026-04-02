import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const LockOpen = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    /* 1. Matches the 18x22 grid of the lock set */
    viewBox="0 0 18 22" 

  >
    {/* 3. The lock body outline */}
    <rect x="1" y="8" width="16" height="13" rx="2" />
    
    {/* 4. The raised shackle path */}
    <path d="M14 5V3C14 1.89543 13.1046 1 12 1H6C4.89543 1 4 1.89543 4 3V8" />
  </IconWrapper>
);