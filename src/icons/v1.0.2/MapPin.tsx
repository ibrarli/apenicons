import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const MapPin = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 24 30" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <path d="M11.8916 0C29.4676 0 26.5382 22 11.8916 30C-2.14487 21.5 -5.6844 1.78896e-05 11.8916 0ZM12 4C9.23858 4 7 6.23858 7 9C7 11.7614 9.23858 14 12 14C14.7614 14 17 11.7614 17 9C17 6.23858 14.7614 4 12 4Z" />
  </IconWrapper>
);