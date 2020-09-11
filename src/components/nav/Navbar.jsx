import React, { useState, useEffect } from 'react';
import Link from './Link';

const Navbar = ({ navItems }) => {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const path = window.location.pathname;
    switch(path) {
      case '/':
        setActiveItem(0);
        break
      case '/list':
        setActiveItem(1);
        break;
      case '/dropdown':
        setActiveItem(2);
        break;
      case '/translate':
        setActiveItem(3);
        break;
      default: 
        setActiveItem(0);
    }
  }, [])

  const renderedNavItems = navItems.map((navItem, idx) => (
    <Link
      key={navItem.id}
      isActive={activeItem === idx}
      href={navItem.href}
      idx={idx}
      setActive={setActiveItem}
    >
      {navItem.label}
    </Link>
  ));
  return (
    <div className="ui four item menu">
      {renderedNavItems}
    </div>
  )
};

export default Navbar;
