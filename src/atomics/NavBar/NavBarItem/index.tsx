import React from 'react';

interface NavBarItemProps {
  readonly last?: boolean;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ last, children }) => {
  const style = last ? '' : 'mr-6';
  return (
    <div
      className={`block lg:inline-block mt-4 lg:mt-0 text-white hover:text-blue-300 cursor-pointer lg:${style} lg:m-0 m-3`}
    >
      {children}
    </div>
  );
};

export default NavBarItem;
