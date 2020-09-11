import React from 'react';

const Link = ({ href, label, idx, setActive, isActive, children }) => {
  const onLinkClicked = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, '', href)
    setActive(idx);
    document.title = `Widgets | ${label}`;
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
