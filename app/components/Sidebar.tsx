import { BsBellFill, BsHouseFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { SidebarLogo } from './SidebarLogo';
import { SidebarItem } from './SidebarItem';
import { SidebarTweetButton } from './SidebarTweetButton';

export const Sidebar = () => {
  const items = [
    {
      label: 'Home',
      href: '/',
      icon: BsHouseFill,
    },
    {
      label: 'Notifications',
      href: '/notifications',
      icon: BsBellFill,
    },
    {
      label: 'Profile',
      href: '/profile/123',
      icon: FaUser,
    }
  ];

  return (
    <div
      className='col-span-1 h-full pr-4 md:pr-6'
    >
      <div className='flex flex-col items-end'>
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
          <SidebarItem onCLick={() => { }} icon={BiLogOut} label='logout' />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  )
}