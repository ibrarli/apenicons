import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const ChevronRight = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 8 13" 
  
  >
    {/* 4. The path data for the rightward chevron */}
    <path d="M1.00002 0.999982L6.02946 6.02942L1.00002 11.0589" />
  </IconWrapper>
);