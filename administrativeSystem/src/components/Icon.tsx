import type { ReactElement } from 'react'

export type IconName =
  | 'home'
  | 'users'
  | 'reports'
  | 'settings'
  | 'calendar'
  | 'student'
  | 'teacher'
  | 'staff'
  | 'chart'
  | 'alert'
  | 'menu'
  | 'sun'
  | 'moon'

type IconProps = {
  name: IconName
  size?: number
  className?: string
}

const iconPaths: Record<IconName, ReactElement[]> = {
  home: [
    <path key="roof" d="M3 11L12 4L21 11" />,
    <path key="house" d="M5 10V20H19V10" />,
  ],
  users: [
    <circle key="head" cx="9" cy="9" r="3" />,
    <circle key="head2" cx="16" cy="10" r="2.5" />,
    <path key="body" d="M4 20c1.3-3.2 8.2-3.2 10 0" />,
    <path key="body2" d="M12 18c1-2.2 5-2.2 6 0" />,
  ],
  reports: [
    <path key="bar1" d="M5 20V12" />,
    <path key="bar2" d="M10 20V8" />,
    <path key="bar3" d="M15 20V14" />,
    <path key="base" d="M3 20H21" />,
  ],
  settings: [
    <circle key="center" cx="12" cy="12" r="3" />,
    <path key="v1" d="M12 2V5" />,
    <path key="v2" d="M12 19V22" />,
    <path key="h1" d="M2 12H5" />,
    <path key="h2" d="M19 12H22" />,
    <path key="d1" d="M4.5 4.5L6.5 6.5" />,
    <path key="d2" d="M17.5 17.5L19.5 19.5" />,
    <path key="d3" d="M17.5 6.5L19.5 4.5" />,
    <path key="d4" d="M4.5 19.5L6.5 17.5" />,
  ],
  calendar: [
    <rect key="frame" x="3" y="5" width="18" height="16" rx="2" />,
    <path key="line" d="M3 9H21" />,
    <path key="pin1" d="M8 3V7" />,
    <path key="pin2" d="M16 3V7" />,
  ],
  student: [
    <path key="cap" d="M12 4L2 9L12 14L22 9Z" />,
    <path key="tassel" d="M6 12V17" />,
    <path key="tassel2" d="M18 12V17" />,
  ],
  teacher: [
    <rect key="board" x="4" y="6" width="16" height="8" rx="1" />,
    <path key="stand" d="M12 14V19" />,
    <path key="base" d="M8 19H16" />,
  ],
  staff: [
    <rect key="card" x="5" y="4" width="14" height="16" rx="2" />,
    <circle key="avatar" cx="12" cy="10" r="2.5" />,
    <path key="line" d="M9 16H15" />,
  ],
  chart: [
    <path key="line1" d="M4 20L9 14L13 17L20 9" />,
    <path key="axis" d="M3 20H21" />,
  ],
  alert: [
    <path key="triangle" d="M12 4L3 20H21Z" />,
    <path key="bang" d="M12 9V14" />,
    <circle key="dot" cx="12" cy="17" r="1" />,
  ],
  menu: [
    <path key="m1" d="M4 7H20" />,
    <path key="m2" d="M4 12H20" />,
    <path key="m3" d="M4 17H20" />,
  ],
  sun: [
    <circle key="sun" cx="12" cy="12" r="3" />,
    <path key="r1" d="M12 2V5" />,
    <path key="r2" d="M12 19V22" />,
    <path key="r3" d="M2 12H5" />,
    <path key="r4" d="M19 12H22" />,
    <path key="r5" d="M4.5 4.5L6.5 6.5" />,
    <path key="r6" d="M17.5 17.5L19.5 19.5" />,
    <path key="r7" d="M17.5 6.5L19.5 4.5" />,
    <path key="r8" d="M4.5 19.5L6.5 17.5" />,
  ],
  moon: [
    <path key="moon" d="M16 13a5 5 0 1 1-5-8 6 6 0 0 0 5 8z" />,
  ],
}

export default function Icon({ name, size = 20, className = '' }: IconProps) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  )
}
