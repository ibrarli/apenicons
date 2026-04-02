import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const EyeClosed = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    /* 1. Matches the 22x9 source dimensions */
    viewBox="0 0 22 9" 
    stroke={props.color || 'currentColor'}
  
  >
    {/* 3. The main closed eyelid curve */}
    <path d="M21 0.562256C18.9503 3.57696 14.9611 5.56226 11 5.56226C7.03892 5.56222 3.04971 3.57698 1 0.562256" />
    
    {/* 4. The individual eyelash strokes */}
    <path d="M2 2.56226L1 3.56226" />
    <path d="M20 2.56226L21 3.56226" />
    <path d="M11 6.56226V7.56226" />
    <path d="M6 4.56226L5 6.56226" />
    <path d="M16 4.56226L17 6.56226" />
  </IconWrapper>
);