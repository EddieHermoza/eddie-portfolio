import { LuClipboardList } from 'react-icons/lu'
import { RiRobot2Line } from 'react-icons/ri'
import { GrContactInfo } from 'react-icons/gr'
import { IoAnalyticsSharp } from 'react-icons/io5'
export const ADMIN_LINKS = [
  { label: 'Analiticas', href: '/admin/dashboard', icon: IoAnalyticsSharp },
  { label: 'Proyectos', href: '/admin/projects', icon: LuClipboardList },
  { label: 'Información', href: '/admin/information', icon: GrContactInfo },
  { label: 'IA', href: '/admin/ia', icon: RiRobot2Line },
]
