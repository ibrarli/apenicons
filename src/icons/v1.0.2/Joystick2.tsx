import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Joystick2 = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 28 27" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <path d="M14 0C16.7614 0 19 2.23858 19 5C19 7.23876 17.5285 9.13332 15.5 9.77051V17H26C27.1046 17 28 17.8954 28 19V25C28 26.1046 27.1046 27 26 27H2C0.895431 27 1.61067e-08 26.1046 0 25V19C0 17.8954 0.895431 17 2 17H4C4 16.4477 4.44772 16 5 16H7C7.55228 16 8 16.4477 8 17H12.5V9.77051C10.4715 9.13332 9 7.23876 9 5C9 2.23858 11.2386 0 14 0Z" />
  </IconWrapper>
);