import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Dot = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    /* 1. Updated viewBox to match the 6x6 source */
    viewBox="0 0 6 6" 
    /* 2. Using fill since a dot is a solid shape */
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <circle cx="3" cy="3" r="2" />
  </IconWrapper>
);