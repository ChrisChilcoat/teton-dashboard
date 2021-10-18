import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  MenuIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'

const user = { 
  name: 'Chris Chilcoat', 
  email: 'chrischilcoat@gmail.com', 
  avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80'
}

const dashboards = { 
  name: 'Dashboard', 
  href: '#'
}

const breadcrumb = [
  { name: 'Teton', href: '/about'},
  { name: 'Components', href: '#' },
  { name: 'Buttons', href: '#' },
]

const data = [
  { name: 'About', href: '/about'},
  { name: 'Customers', href: '#' },
  { name: 'Press', href: '#' },
  { name: 'Careers', href: '#'},
  { name: 'Privacy', href: '#' },
]

const components =  [
  { name: 'Alerts', href: 'teton-dashboard#/components/alerts', icon: InformationCircleIcon },
  { name: 'Buttons', href: 'teton-dashboard#/components/buttons', icon: OfficeBuildingIcon },
  { name: 'Button Groups', href: 'teton-dashboard#/components/button-groups', icon: OfficeBuildingIcon },
]

const layouts =  [
  { name: 'Three Column', href: 'teton-dashboard#/layouts/three-column-layout', icon: OfficeBuildingIcon },
]

const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: OfficeBuildingIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkAltIcon },
  { name: 'Webinars', href: '#', icon: DesktopComputerIcon },
]

const navigation = [
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

export { user, data, company, resources, navigation, breadcrumb, components, layouts }
