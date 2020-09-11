import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';

const TextColor = ({colors}) => {
  const [color, setColor] = useState(colors[0])
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.style.color = color.value;
  }, [color])

  return (
    <div>
      <Dropdown
        options={colors}
        dropdownText="Select a Color"
        selection={color}
        onSelectionChange={setColor}
      />
      <p>The text is now <span ref={textRef}>{color.label}</span></p>
    </div>
  );

};

export default TextColor;
