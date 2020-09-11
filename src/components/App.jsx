import React from 'react';
import Accordion from './accordion/Accordion';
import Search from './search/Search';
import TextColor from './dropdown/TextColor';
import Translate from '../components/translate/Translate';
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

const colors = [
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
  return (
    <div>
      <h1>Widgets</h1>
      <Accordion items={items}/>
      <Search defaultSearchTerm='anime' />
      <TextColor colors={colors} />
      <Translate />
    </div>
  )
}

export default App;
