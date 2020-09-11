import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onIconClicked = (id) => {
    if (id === activeItem) {
      return setActiveItem(null)
    }
    setActiveItem(id);
  }

  const itemList = items.map((item, idx) => {
    return <AccordionItem
      key={item.id}
      idx={idx}
      title={item.title}
      content={item.content}
      isActive={activeItem === idx} 
      onIconClicked={onIconClicked}  
    />
  })

  return (
    <div className="ui accordion">
      {itemList}
    </div>
  )
}

export default Accordion;
