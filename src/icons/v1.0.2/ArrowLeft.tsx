import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const ArrowLeft = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 27 22" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M19.5 3.00488C19.5 0.695529 17 -0.748322 15 0.40625L1.5 8.20117C-0.499843 9.3559 -0.499836 12.2417 1.5 13.3965L15 21.1914C17 22.346 19.5 20.9021 19.5 18.5928V3.00488ZM24 6.79883C22.3431 6.79883 21 8.14198 21 9.79883V11.7988C21 13.4557 22.3431 14.7988 24 14.7988C25.6569 14.7988 27 13.4557 27 11.7988V9.79883C27 8.14198 25.6569 6.79883 24 6.79883Z" 
    />
  </IconWrapper>
);