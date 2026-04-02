import IconWrapper from '../../components/IconWrapper';
import type { IconProps } from '../../components/IconWrapper';

export const LockKeyholeOpen = (props: IconProps) => (
  <IconWrapper 
    {...props} 
    viewBox="0 0 18 22" 
  >
    {/* 1. The lock body outline */}
    <rect x="1" y="8" width="16" height="13" rx="2" />
    
    {/* 2. The "Open" shackle - notice it starts at Y=5 instead of Y=8 */}
    <path d="M14 5V3C14 1.89543 13.1046 1 12 1H6C4.89543 1 4 1.89543 4 3V8" />
    
    {/* 3. The keyhole detail - filled solid */}
    <path 
      d="M9 12C10.1046 12 11 12.8954 11 14C11 14.7398 10.5971 15.3835 10 15.7295V16C10 16.5523 9.55228 17 9 17C8.44772 17 8 16.5523 8 16V15.7295C7.4029 15.3835 7 14.7398 7 14C7 12.8954 7.89543 12 9 12Z" 
      fill={props.color || 'currentColor'} 
      stroke="none"
    />
  </IconWrapper>
);