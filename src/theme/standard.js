import Logo from '@/assets/icons/logo.svg';
import clx from 'clsx';
import { useStateValue } from '@/store/configureStore'
import React from 'react';

export default ({ children }) => {
  const { app } = useStateValue()
  let logo = null
  return (
    <div className="landing-de px-4 max-h-screen h-screen overflow-hidden">
      {app?.logo && React.createElement(app.logo?.default || 'img', { src: app.logo?.default ? null : app.logo, className: 'mt-8 w-16 h-16' })}
      <div
        className={clx(
          'absolute w-11/12 left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4',
          'md:w-6/12',
          'xl:w-2/5'
        )}
      >
        {children}
      </div>
    </div>
  );
}