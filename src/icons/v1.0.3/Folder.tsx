import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Folder = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 35 28" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <path 
      d="M11.4014 0C12.1361 2.01686e-05 12.8454 0.269694 13.3945 0.757812L15.54 2.66504C15.6953 2.80304 15.8314 2.95338 15.9502 3.11133H31.2227C32.8794 3.11145 34.2227 4.45455 34.2227 6.11133V25C34.2227 26.6568 32.8794 27.9999 31.2227 28H3C1.34325 27.9999 0 26.6568 0 25V3C7.73018e-07 1.34322 1.34325 0.000117277 3 0H11.4014Z" 
    />
  </IconWrapper>
);