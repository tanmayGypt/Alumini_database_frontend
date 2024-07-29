
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [

  {
    title: 'Achievements',
    path: '/admin/Achievements',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Networking',
    path: '/networking',
    icon: <FaIcons.FaNetworkWired />,
    cName: 'nav-text'
  },
  {
    title: 'Alumni Directory',
    path: '/alumni-directory',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Student',
    path: '/student',
    icon: <IoIcons.IoMdSchool />,
    cName: 'nav-text'
  },
  {
    title: 'News',
    path: '/news',
    icon: <FaIcons.FaNewspaper />,
    cName: 'nav-text'
  }
];
