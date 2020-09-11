import React from 'react';

const Link = ({ href, idx, setActive, isActive, children }) => {
  const onLinkClicked = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', href)
    setActive(idx);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
    <a
      className={`item ${isActive ? 'active' : ''}`}
      href={href}
      onClick={onLinkClicked}
    >
      {children}
    </a>
  )
}

export default Link;
