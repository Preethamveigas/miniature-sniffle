import React from 'react'
import Menu from '@/components/Menus/MenuItems';
import MobileMenu from '@/components/Menus/MobileMenu';
import { Link } from 'react-router-dom';
export default ({ logo }) => (
  <>
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <Link to="/home">
        <span className="sr-only">Afya</span>
        <span className="h-8 w-8 sm:h-10">
          {logo && React.createElement(logo?.default || 'img', { src: app.logo?.default ? null : logo, className: logo.default ? null : 'w-16 h-16' })}
        </span>
      </Link>
    </div>
    <MobileMenu />
    <nav className="hidden md:flex space-x-10">
      <Menu />
    </nav>
  </>
);
