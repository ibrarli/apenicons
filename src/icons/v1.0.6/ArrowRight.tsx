import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const ArrowRight = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 15 15" 
  >
    <path d="M6.5 1L13.5 7.49992L6.5 14" />
    <path d="M13.5 7.49992L1.49997 7.49991" />
  </IconWrapper>
);