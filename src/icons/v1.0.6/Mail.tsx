import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Mail = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 22 18" 
    stroke={props.color || 'currentColor'}

  >
    <rect x="1" y="2" width="20" height="15" rx="2" />
    <path d="M5 6.36395L9.94975 11.3137C10.7308 12.0947 11.9971 12.0947 12.7782 11.3137L17.7279 6.36395" />
  </IconWrapper>
);