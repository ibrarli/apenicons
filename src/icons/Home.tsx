import IconWrapper from '../components/IconWrapper';
import type { IconProps } from '../components/IconWrapper';

export const Home = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 77 72" 
    fill={props.color || 'currentColor'} 
    stroke="none" 
  >
    <path d="M30.7217 3.2218C35.0174 -1.07397 41.9826 -1.07397 46.2783 3.2218L73.7783 30.7218C75.8412 32.7847 77 35.5828 77 38.5001V60.9435C77 67.0186 72.0751 71.9435 66 71.9435H52V43.4435C51.9999 41.2344 50.2091 39.4435 48 39.4435H30C27.7909 39.4435 26.0001 41.2344 26 43.4435V71.9435H11C4.92487 71.9435 0 67.0186 0 60.9435V38.5001C0 35.5828 1.15883 32.7847 3.22168 30.7218L30.7217 3.2218Z" />
  </IconWrapper>
);