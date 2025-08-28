import {
    ChartPieIcon,
    CursorArrowRaysIcon,
    CodeBracketIcon,
    PresentationChartBarIcon,
    VideoCameraIcon,
    Bars3Icon,
    ClipboardDocumentListIcon,
    CommandLineIcon,
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    EnvelopeIcon,
    XMarkIcon,
    CogIcon,
    ChatBubbleLeftRightIcon,
  } from '@heroicons/react/24/outline'

const products2 = [
    { name: 'Digital Marketing',
      description: 'Get a better understanding of your traffic', 
      href: '/digital-marketing-services', 
      icon: ChartPieIcon,
      dropItem: [
        { name: 'SEO Services', description: 'Speak directly to your customers', href: '/seo-service', icon: PresentationChartBarIcon },
        { name: 'SMO Services', description: 'Your customers data will be safe and secure', href: '/social-media-marketing-agency', icon: VideoCameraIcon },
        { name: 'Branding', description: 'Connect with third-party tools', href: '/website-development-company', icon: CodeBracketIcon },
      ]
    },
    { name: 'Performance Marketing', 
      description: 'Speak directly to your customers', 
      href: '#', 
      icon: PresentationChartBarIcon,
      dropItem: [
        { name: 'Google Ads', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
        { name: 'Meta Ads', description: 'Speak directly to your customers', href: '/facebok-ads-agency', icon: PresentationChartBarIcon },
        { name: 'Youtube Ads', description: 'Your customers data will be safe and secure', href: '#', icon: VideoCameraIcon },
        { name: 'Linkedin Ads', description: 'Connect with third-party tools', href: '#', icon: CodeBracketIcon },
      ]
    },
    { name: 'Graphics', 
      description: 'Your customers data will be safe and secure', 
      href: '#', 
      icon: VideoCameraIcon,
      dropItem: [
        { name: 'Satic Post', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
        { name: 'Reels', description: 'Speak directly to your customers', href: '#', icon: PresentationChartBarIcon },
        { name: 'Logo', description: 'Your customers data will be safe and secure', href: '#', icon: VideoCameraIcon },
      ]
    },
    { name: 'Development', 
      description: 'Connect with third-party tools', 
      href: '/website-development-company', 
      icon: CodeBracketIcon ,
      dropItem: [
        { name: 'Website Development', description: 'Get a better understanding of your traffic', href: '/website-development-company', icon: ChartPieIcon },
        { name: 'Mobile App Development', description: 'Speak directly to your customers', href: '/mobile-app-development-company', icon: PresentationChartBarIcon },
        { name: 'Software Development', description: 'Your customers data will be safe and secure', href: '/software-development-company', icon: VideoCameraIcon },
      ]
    },
  ]

  export default products2;