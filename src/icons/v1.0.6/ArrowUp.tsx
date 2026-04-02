import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const ArrowUp = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    /* 1. Set viewBox to match the 15x15 source */
    viewBox="0 0 15 15" 
 
  >
    {/* 4. Path for the arrow head (V-shape) */}
    <path d="M1 8.00006L7.49992 1.00002L14 8.00006" />
    {/* 5. Path for the arrow stem (Vertical line) */}
    <path d="M7.49992 1.00006L7.49991 13.0001" />
  </IconWrapper>
);