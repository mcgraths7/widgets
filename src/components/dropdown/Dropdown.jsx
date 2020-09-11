import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, dropdownText, selection, onSelectionChange }) => {
  /*
    Setup - I initialize the 'isOpen' state, which determines whether the 
    dropdown is open. Then, I initialize a ref to get access to the parent div.
    The first useEffect adds an event listener to the document body, which listens
    for click events, then determines whether the click occurred on an element 
    within the parent div.
  */

  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  useEffect(() => {
    const onBodyClicked = (e) => {
      if (parentRef.current.contains(e.target)) {
        return;
      }
      setIsOpen(false);
    };
    document.body.addEventListener('click', onBodyClicked);  
    return () => {
      document.body.removeEventListener('click', onBodyClicked);
    }
  }, [])

  /*
    I initialize another reference, this time to the text which I want to 
    color match with the current selection. I then set up another useEffect hook
    which sets the color style on the ref to the current value of the selection  
  */

  const textRef = useRef();

  useEffect(() => {
    textRef.current.style.color = selection.value;
  }, [selection])

  /*
    I render a list of divs which make up the dropdown menu, each of these
    has a click event handler which sets itself to the selection state passed in
    from the App component
  */

  const renderedOptions = options
    .filter((option) => option !== selection)
    .map((option) => {
      return (
        <div
          key={option.id}
          className="item"
          onClick={() => onSelectionChange(option)}>
          {option.label}
        </div>
      );
    })
  
  /*
    Finally, I have a variable which returns an object so I don't need to have
    repeated ternary expressions in the return statement in order to add/remove
    CSS classes to open and  close the dropdown menu
  */

  const selectionClasses = isOpen ? {
    selection: 'visible active',
    menu: 'visible transition'
  } : {
    selection: '',
    menu: ''
  };

  return (
    <div className="ui form" ref={parentRef}>
      <div className="field">
        <label className="label">{dropdownText}</label>
        <div
          className={`ui selection dropdown ${selectionClasses.selection}`}
          onClick={() => setIsOpen(!isOpen)}>
          <i className="dropdown icon"></i>
          <div className="text">{selection.label}</div>
          <div className={`menu ${selectionClasses.menu}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
      <p>This text is now <span ref={textRef}>{selection.label}</span></p>
    </div>
  );
}

export default Dropdown;
