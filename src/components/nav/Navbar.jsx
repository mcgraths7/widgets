import React, { useState, useEffect } from 'react';
import Link from './Link';

const Navbar = ({ navItems }) => {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const path = window.location.pathname;
    const label = path.split('/')[1];
    switch(path) {
      case '/':
        setActiveItem(0);
        document.title = 'Widgets | Accordion';
        break
      case '/list':
        setActiveItem(1);
        document.title = `Widgets | ${label}`;
        break;
      case '/dropdown':
        setActiveItem(2);
        document.title = `Widgets | ${label}`;
        break;
      case '/translate':
        setActiveItem(3);
        document.title = `Widgets | ${label}`;
        break;
      default: 
        setActiveItem(0);
        document.title = 'Widgets';
    }
  }, [])

  const renderedNavItems = navItems.map((navItem, idx) => (
    <Link
      key={navItem.id}
      isActive={activeItem === idx}
      href={navItem.href}
      idx={idx}
      label={navItem.label}
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
