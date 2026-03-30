import { 
  Home, HamburgerMenu, Kebab, KebabMenu, ArrowDown, ArrowRight, ArrowUp,
  Check, Star, Mail, List,
  User, UserCheck,
  Plus, Minus,
  Dot, Triangle, Square, SquareOutline, SquareDotted,
  // v1.0.2 Imports
  ArrowLeft, CircleCross, CircleMinus, CirclePlus, CircleStar,
  Cross, EmojiHappy, Eye, EyeScan, Italic,
  Joystick, Joystick2, Lock, Mails, MapPin,
  Moon, Scan, ScanSearch, Search, Sun,
  Hd, Mic, Monitor, Pause, Play, Video, Wifi,        // Media & Hardware
  PieChart, Refresh, Settings,                      // Data & System
  Folder, Bookmark, Clipboard,                      // Files & Productivity
  Brush, PaintRoller, Crop, Bold,                   // Design & Text
  Bug, Bolt, Ring                                   // Development & Objects
} from '../../src'; 

export const ALL_ICONS = [
  // Core & Navigation (v1.0.1)
  { name: 'Home', component: Home, tags: ['main', 'house'], version: "v1.0.1" },
  { name: 'HamburgerMenu', component: HamburgerMenu, tags: ['nav', 'menu', 'bars'], version: "v1.0.1" },
  { name: 'Kebab', component: Kebab, tags: ['dots', 'more', 'vertical'], version: "v1.0.1" },
  { name: 'KebabMenu', component: KebabMenu, tags: ['dots', 'more', 'horizontal'], version: "v1.0.1" },
  { name: 'ArrowDown', component: ArrowDown, tags: ['direction', 'bottom'], version: "v1.0.1" },
  { name: 'ArrowRight', component: ArrowRight, tags: ['direction', 'next'], version: "v1.0.1" },
  { name: 'ArrowUp', component: ArrowUp, tags: ['direction', 'top'], version: "v1.0.1" },

  // Actions & Feedback (v1.0.1)
  { name: 'Check', component: Check, tags: ['done', 'success', 'tick'], version: "v1.0.1" },
  { name: 'Star', component: Star, tags: ['favorite', 'rating', 'score'], version: "v1.0.1" },
  { name: 'Mail', component: Mail, tags: ['email', 'envelope'], version: "v1.0.1" },
  { name: 'List', component: List, tags: ['bullets', 'tasks', 'todo'], version: "v1.0.1" },

  // User & Profile (v1.0.1)
  { name: 'User', component: User, tags: ['profile', 'account', 'person'], version: "v1.0.1" },
  { name: 'UserCheck', component: UserCheck, tags: ['verified', 'authorized'], version: "v1.0.1" },

  // Math & Controls (v1.0.1)
  { name: 'Plus', component: Plus, tags: ['add', 'new', 'increment'], version: "v1.0.1" },
  { name: 'Minus', component: Minus, tags: ['remove', 'decrement'], version: "v1.0.1" },

  // Geometric Shapes (v1.0.1)
  { name: 'Dot', component: Dot, tags: ['circle', 'point'], version: "v1.0.1" },
  { name: 'Triangle', component: Triangle, tags: ['shape', 'delta'], version: "v1.0.1" },
  { name: 'Square', component: Square, tags: ['filled', 'box'], version: "v1.0.1" },
  { name: 'SquareOutline', component: SquareOutline, tags: ['frame', 'border'], version: "v1.0.1" },
  { name: 'SquareDotted', component: SquareDotted, tags: ['placeholder', 'dashed'], version: "v1.0.1" },

  // v1.0.2 Additions
  { name: 'ArrowLeft', component: ArrowLeft, tags: ['direction', 'back', 'previous'], version: "v1.0.2" },
  { name: 'CircleCross', component: CircleCross, tags: ['cancel', 'close', 'error'], version: "v1.0.2" },
  { name: 'CircleMinus', component: CircleMinus, tags: ['remove', 'decrement', 'circle'], version: "v1.0.2" },
  { name: 'CirclePlus', component: CirclePlus, tags: ['add', 'increment', 'circle'], version: "v1.0.2" },
  { name: 'CircleStar', component: CircleStar, tags: ['favorite', 'rating', 'circle'], version: "v1.0.2" },
  { name: 'Cross', component: Cross, tags: ['close', 'delete', 'remove'], version: "v1.0.2" },
  { name: 'EmojiHappy', component: EmojiHappy, tags: ['smile', 'face', 'success'], version: "v1.0.2" },
  { name: 'Eye', component: Eye, tags: ['view', 'show', 'visibility'], version: "v1.0.2" },
  { name: 'EyeScan', component: EyeScan, tags: ['security', 'biometric', 'scan'], version: "v1.0.2" },
  { name: 'Italic', component: Italic, tags: ['text', 'style', 'editor'], version: "v1.0.2" },
  { name: 'Joystick', component: Joystick, tags: ['game', 'directional', 'input'], version: "v1.0.2" },
  { name: 'Joystick2', component: Joystick2, tags: ['game', 'controller', 'analog'], version: "v1.0.2" },
  { name: 'Lock', component: Lock, tags: ['security', 'private', 'closed'], version: "v1.0.2" },
  { name: 'Mails', component: Mails, tags: ['inbox', 'stack', 'messages'], version: "v1.0.2" },
  { name: 'MapPin', component: MapPin, tags: ['location', 'marker', 'address'], version: "v1.0.2" },
  { name: 'Moon', component: Moon, tags: ['dark-mode', 'night', 'crescent'], version: "v1.0.2" },
  { name: 'Scan', component: Scan, tags: ['camera', 'frame', 'qr'], version: "v1.0.2" },
  { name: 'ScanSearch', component: ScanSearch, tags: ['visual-search', 'ai', 'camera'], version: "v1.0.2" },
  { name: 'Search', component: Search, tags: ['find', 'lookup', 'magnifier'], version: "v1.0.2" },
  { name: 'Sun', component: Sun, tags: ['light-mode', 'day', 'weather'], version: "v1.0.2" },
// Media & Hardware (v1.0.3)
  { name: 'Hd', component: Hd, tags: ['video', 'quality', 'high-definition'], version: "v1.0.3" },
  { name: 'Mic', component: Mic, tags: ['audio', 'record', 'voice', 'microphone'], version: "v1.0.3" },
  { name: 'Monitor', component: Monitor, tags: ['screen', 'display', 'computer', 'desktop'], version: "v1.0.3" },
  { name: 'Pause', component: Pause, tags: ['media', 'stop', 'control', 'wait'], version: "v1.0.3" },
  { name: 'Play', component: Play, tags: ['media', 'start', 'control', 'action'], version: "v1.0.3" },
  { name: 'Video', component: Video, tags: ['camera', 'movie', 'record', 'media'], version: "v1.0.3" },
  { name: 'Wifi', component: Wifi, tags: ['network', 'internet', 'connection', 'signal'], version: "v1.0.3" },

  // Data & System (v1.0.3)
  { name: 'PieChart', component: PieChart, tags: ['data', 'analytics', 'stats', 'graph'], version: "v1.0.3" },
  { name: 'Refresh', component: Refresh, tags: ['reload', 'update', 'sync', 'rotate'], version: "v1.0.3" },
  { name: 'Settings', component: Settings, tags: ['config', 'options', 'gear', 'preferences'], version: "v1.0.3" },

  // Files & Productivity (v1.0.3)
  { name: 'Folder', component: Folder, tags: ['directory', 'files', 'storage', 'save'], version: "v1.0.3" },
  { name: 'Bookmark', component: Bookmark, tags: ['save', 'favorite', 'ribbon', 'read-later'], version: "v1.0.3" },
  { name: 'Clipboard', component: Clipboard, tags: ['copy', 'paste', 'tasks', 'notes'], version: "v1.0.3" },

  // Design & Editing (v1.0.3)
  { name: 'Brush', component: Brush, tags: ['paint', 'draw', 'art', 'style'], version: "v1.0.3" },
  { name: 'PaintRoller', component: PaintRoller, tags: ['fill', 'theme', 'appearance', 'color'], version: "v1.0.3" },
  { name: 'Crop', component: Crop, tags: ['edit', 'image', 'resize', 'frame'], version: "v1.0.3" },
  { name: 'Bold', component: Bold, tags: ['text', 'style', 'editor', 'weight'], version: "v1.0.3" },

  // Development & Objects (v1.0.3)
  { name: 'Bug', component: Bug, tags: ['debug', 'error', 'code', 'issue'], version: "v1.0.3" },
  { name: 'Bolt', component: Bolt, tags: ['flash', 'energy', 'power', 'fast'], version: "v1.0.3" },
  { name: 'Ring', component: Ring, tags: ['premium', 'jewelry', 'marriage', 'engagement'], version: "v1.0.3" },
];