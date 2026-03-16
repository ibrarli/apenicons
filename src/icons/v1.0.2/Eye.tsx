import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Eye = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 37 24" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M18.4697 0C26.5985 7.74167e-05 33.6228 4.73076 36.9395 11.5889C33.623 18.4476 26.5989 23.1786 18.4697 23.1787C10.3406 23.1786 3.31645 18.4475 0 11.5889C3.31665 4.73076 10.341 6.54356e-05 18.4697 0ZM18.7217 4.45801C14.7829 4.45801 11.5898 7.65102 11.5898 11.5898C11.5899 15.5286 14.7829 18.7217 18.7217 18.7217C22.6603 18.7215 25.8535 15.5285 25.8535 11.5898C25.8535 7.65114 22.6603 4.4582 18.7217 4.45801Z" 
    />
  </IconWrapper>
);