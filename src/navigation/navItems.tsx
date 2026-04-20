import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import MailIcon from '@mui/icons-material/Mail'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import type { ReactElement } from 'react'

export type NavItem = {
  label: string
  to?: string
  icon: ReactElement
  children?: NavItem[]
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/', icon: <HomeIcon /> },
  { label: 'About', to: '/about', icon: <InfoIcon /> },
  { label: 'Contact', to: '/contact', icon: <MailIcon /> },
  {
    label: 'Integrated Plans',
    icon: <FolderOutlinedIcon />,
    children: [
      {
        label: 'Local Environment Setup',
        to: '/ip/setup',
        icon: <DescriptionOutlinedIcon />,
      },
      {
        label: 'Local Needs Assessment',
        to: '/ip/lna',
        icon: <DescriptionOutlinedIcon />,
      },
    ],
  },
  {
    label: 'BMAD',
    icon: <FolderOutlinedIcon />,
    children: [
      {
        label: 'About',
        to: '/bmad/about',
        icon: <DescriptionOutlinedIcon />,
      },
      {
        label: 'Setup',
        icon: <DescriptionOutlinedIcon />,
        children: [
          {
            label: 'Installation',
            to: '/bmad/setup/installation',
            icon: <DescriptionOutlinedIcon />,
          },
          {
            label: 'Creating a PRD',
            to: '/bmad/setup/creating-a-prd',
            icon: <DescriptionOutlinedIcon />,
          },
        ],
      },
      {
        label: 'Demo',
        icon: <DescriptionOutlinedIcon />,
        children: [
          {
            label: 'Architecture Design',
            to: '/bmad/demo/architecture-design',
            icon: <DescriptionOutlinedIcon />,
          },
          {
            label: 'BMAD Demo',
            to: '/bmad/demo',
            icon: <DescriptionOutlinedIcon />,
          },
        ],
      },
    ],
  },
]
