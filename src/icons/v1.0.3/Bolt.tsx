import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Bolt = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 34 39" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <path 
      d="M33.7754 9.75V29.25L16.8877 39L0 29.25V9.75L16.8877 0L33.7754 9.75ZM16.3877 11C11.4171 11 7.3877 15.0294 7.3877 20C7.3877 24.9706 11.4171 29 16.3877 29C21.3583 29 25.3877 24.9706 25.3877 20C25.3877 15.0294 21.3583 11 16.3877 11Z" 
    />
  </IconWrapper>
);