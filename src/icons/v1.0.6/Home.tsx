import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Home = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    /* 1. Updated viewBox to match the 22x23 source */
    viewBox="0 0 22 23" 
    stroke={props.color || 'currentColor'}

  >
    {/* 4. The path data for the house outline including the door */}
    <path d="M1 11.45V20.05C1 20.6023 1.44772 21.05 2 21.05H7C7.55228 21.05 8 20.6023 8 20.05V15.05C8 14.4977 8.44772 14.05 9 14.05H13C13.5523 14.05 14 14.4977 14 15.05V20.05C14 20.6023 14.4477 21.05 15 21.05H20C20.5523 21.05 21 20.6023 21 20.05V11.45C21 11.1932 20.9012 10.9463 20.7241 10.7603L11.7241 1.31033C11.33 0.896539 10.67 0.89654 10.2759 1.31033L1.27586 10.7603C1.09877 10.9463 1 11.1932 1 11.45Z" />
  </IconWrapper>
);