import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const Bookmark = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 27 34" 
    fill={props.color || 'currentColor'} 
    stroke="none"
  >
    <path 
      d="M0 2C0 0.89543 0.895431 0 2 0H25C26.1046 0 27 0.895431 27 2V31.5479C27 33.0848 25.3385 34.0474 24.0052 33.2829L14.4948 27.83C13.8786 27.4767 13.1214 27.4767 12.5052 27.83L2.9948 33.2829C1.66148 34.0474 0 33.0848 0 31.5479V2Z" 
    />
  </IconWrapper>
);