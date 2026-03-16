import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const CircleMinus = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 29 29" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <path d="M14.5 0C22.508 9.99203e-05 28.9999 6.49204 29 14.5C28.9998 22.5079 22.5079 28.9999 14.5 29C6.49233 28.9996 0.000151293 22.5077 0 14.5C0.000125045 6.49224 6.49231 0.000426164 14.5 0ZM8.71387 12.7861C7.76729 12.7864 7 13.5534 7 14.5C7 15.4466 7.76729 16.2136 8.71387 16.2139H20.2861C21.2327 16.2136 22 15.4466 22 14.5C22 13.5534 21.2327 12.7864 20.2861 12.7861H8.71387Z" />
  </IconWrapper>
);