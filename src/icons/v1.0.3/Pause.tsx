import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Pause = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 24 28" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <rect width="10" height="28" rx="3" />
    <rect x="14" width="10" height="28" rx="3" />
  </IconWrapper>
);