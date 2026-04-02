import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const X = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    /* 1. Updated viewBox to match the 10x10 source */
    viewBox="0 0 10 10" 
 
  >
    {/* 4. The two diagonal paths for the X */}
    <path d="M1 1L9 9" />
    <path d="M9 1L1 9" />
  </IconWrapper>
);