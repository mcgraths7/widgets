import React, { useState } from 'react';
import Accordion from './accordion/Accordion';
import Search from './search/Search';
import Dropdown from './dropdown/Dropdown';
import generateRandomId from '../util/generateRandomId';

const items = [
  {
    id: generateRandomId(),
    title: 'What is React?',
    content: 'React is a JavaScript library for creating User Interfaces'
  },
  {
    id: generateRandomId(),
    title: 'Who created React?',
    content: 'React was open sourced by Facebook'
  },
  {
    id: generateRandomId(),
    title: 'Who cares about React?',
    content: 'Apparently a lot of people'
  }
]

const options = [
  {
    id: generateRandomId(),
    label: 'Red',
    value: 'red'
  },
  {
    id: generateRandomId(),
    label: 'Orange',
    value: 'orange'
  },
  {
    id: generateRandomId(),
    label: 'Yellow',
    value: 'yellow'
  },
  {
    id: generateRandomId(),
    label: 'Green',
    value: 'green'
  },
  {
    id: generateRandomId(),
    label: 'Blue',
    value: 'blue'
  },
  {
    id: generateRandomId(),
    label: 'Indigo',
    value: 'indigo'
  },
  {
    id: generateRandomId(),
    label: 'Violet',
    value: 'violet'
  },
]

const App = () => {
  const [selection, setSelection] = useState(options[0]);
  return (
    <div>
      <h1>Widgets</h1>
      {/* <Accordion items={items}/>
      <Search /> defaultSearchTerm='anime' */}
      <Dropdown
        options={options}
        dropdownText="Select a Color"
        selection={selection}
        onSelectionChange={setSelection}
      />
    </div>
  )
}

export default App;
