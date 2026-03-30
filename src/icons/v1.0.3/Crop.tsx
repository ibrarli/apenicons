import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Crop = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 40 40" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <path 
      d="M11 8H24C28.4183 8 32 11.5817 32 16V29H40V32H32V40H29V32H16L15.5879 31.9893C11.4976 31.7817 8.2183 28.5024 8.01074 24.4121L8 24V11H0V8H8V0H11V8ZM11 24C11 26.7614 13.2386 29 16 29H29V16C29 13.2386 26.7614 11 24 11H11V24Z" 
    />
  </IconWrapper>
);