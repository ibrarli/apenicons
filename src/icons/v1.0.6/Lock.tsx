import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Lock = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 18 22" 
  >
    <rect x="1" y="8" width="16" height="13" rx="2" />
    <path d="M14 8V3C14 1.89543 13.1046 1 12 1H6C4.89543 1 4 1.89543 4 3V8" />
  </IconWrapper>
);