import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const AtSign = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    /* 1. Updated viewBox to match the 22x22 source */
    viewBox="0 0 22 22" 

  >
    <circle cx="11" cy="11" r="5" />
    
    <path d="M17.001 19C15.3295 20.2558 13.2516 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11C21 12.4969 20.8112 14.1317 20.2562 15.4596C20.1141 15.7995 19.7701 16 19.4017 16H17C16.4477 16 16 15.5523 16 15V6" />
  </IconWrapper>
);