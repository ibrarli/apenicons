import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Check = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    /* 1. Updated viewBox to match the 15x9 source */
    viewBox="0 0 15 9" 

  >
    {/* 4. The path data for the checkmark shape */}
    <path d="M1 4.00006L4.69865 7.4142C5.06319 7.7507 5.61933 7.76906 6.00527 7.45734L14 1.00006" />
  </IconWrapper>
);