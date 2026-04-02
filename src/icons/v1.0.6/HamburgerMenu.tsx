import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const HamburgerMenu = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 13 10" 
  >
    <path d="M12 1L1 1" />
    <path d="M12 5L1 5" />
    <path d="M12 9L1 9" />
  </IconWrapper>
);