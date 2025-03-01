/**
 * @name Navigation
 * @description Navigation drawer for the application
 */

import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import BriefcaseIcon from '@assets/icons/briefcase-solid.svg';
import FaceIcon from '@assets/icons/face-smile-solid.svg';
import DiplomaIcon from '@assets/icons/diploma-solid.svg';
import HouseIcon from '@assets/icons/house-solid.svg';
import AngleRight from '@assets/icons/angles-right-solid.svg';
import AngleLeft from '@assets/icons/angles-left-solid.svg';
import Logo from '@assets/logo.svg';
import GithubLogo from '@assets/icons/github.svg';
import LinkedInLogo from '@assets/icons/LinkedIn_icon.svg';

interface NavItem {
  name: string;
  path: string;
  icon: string;
  alt: string;
}

const Nav: FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const navItems: NavItem[] = [
    { name: 'Home', path: '/', icon: HouseIcon, alt: 'Home' },
    { name: 'About', path: '/about', icon: FaceIcon, alt: 'About' },
    {
      name: 'Education',
      path: '/education',
      icon: DiplomaIcon,
      alt: 'Education',
    },
    { name: 'My Work', path: '/work', icon: BriefcaseIcon, alt: 'Work' },
  ];

  const socialItems: NavItem[] = [
    {
      name: 'Github',
      path: 'https://github.com/CptSpooky',
      icon: GithubLogo,
      alt: 'Github',
    },
    {
      name: 'LinkedIn',
      path: 'https://www.linkedin.com/in/daniellevarela/',
      icon: LinkedInLogo,
      alt: 'LinkedIn',
    },
  ];

  return (
    <>
      {/* Sidebar for larger screens */}
      <div
        className={`bg-base-200 shadow-md flex-col pt-4 transition-all justify-between pb-4 hidden md:flex sticky left-0 top-0 h-screen ${
          collapsed ? 'w-20 max-w-20 min-w-20' : 'w-48 max-w-48 min-w-48'
        }`}
      >
        {/* Logo and divider */}
        <div>
          <img src={Logo} alt="Logo" className="w-[48px] ml-4 mt-2" />
          <div className="divider" />
        </div>

        {/* Navigation Links */}
        <ul className="menu w-full p-0">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `w-full flex gap-2 items-center p-3 transition min-h-[47px] ${
                    isActive ? 'bg-primary-purple text-white' : ''
                  }`
                }
              >
                <img
                  alt={item.alt}
                  src={item.icon}
                  className="max-w-[20px] invert brightness-0 ml-4 mr-2"
                />
                {!collapsed && <span className="mt-[2px]">{item.name}</span>}
              </NavLink>
            </li>
          ))}
          <li
            onClick={() => setCollapsed(!collapsed)}
            className="mt-4 cursor-pointer"
          >
            <div>
              <img
                src={collapsed ? AngleRight : AngleLeft}
                alt="Toggle Navigation"
                className="min-h-[20px] invert brightness-0 ml-4 mr-2"
              />
              {!collapsed && (
                <span className="mt-[2px] text-nowrap">Minimize Menu</span>
              )}
            </div>
          </li>
        </ul>

        {/* Social Links */}
        <ul className="menu w-full p-0">
          {socialItems.map((item) => (
            <li key={item.name}>
              <a href={item.path} target="blank">
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="max-w-[24px] ml-4 mr-2"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Navbar for mobile screens */}
      <div className="fixed bottom-0 left-0 w-full bg-base-200 shadow-md flex md:hidden justify-around p-2 z-10">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center text-sm p-2 ${
                isActive ? 'text-purple-500' : 'text-gray-500'
              }`
            }
          >
            <img
              src={item.icon}
              alt={item.alt}
              className="max-w-[24px] invert brightness-0"
            />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Nav;
