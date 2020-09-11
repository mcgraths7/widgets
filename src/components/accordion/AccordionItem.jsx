import React from 'react';

const AccordionItem = ({idx, title, content, isActive, onIconClicked}) => {
  const activeClass = isActive ? 'active' : '';

  return (
    <>
      <div className={`${activeClass} title`} onClick={() => onIconClicked(idx)} >
        <i className="dropdown icon"></i>
        {title}
      </div>
      <div className={`${activeClass} content`}>
        <p>{content}</p>
      </div>
    </>
  );
}

export default AccordionItem;
