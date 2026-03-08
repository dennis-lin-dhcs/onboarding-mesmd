import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import MailIcon from '@mui/icons-material/Mail'
import type { ReactElement } from 'react'

export type NavItem = {
  label: string
  to: string
  icon: ReactElement
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/', icon: <HomeIcon /> },
  { label: 'About', to: '/about', icon: <InfoIcon /> },
  { label: 'Contact', to: '/contact', icon: <MailIcon /> },
  { label: 'IP-LNA', to: '/ip-lna', icon: <MailIcon /> },
]
