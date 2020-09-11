import React from 'react';
import Accordion from './accordion/Accordion';
import Search from './search/Search';
import TextColor from './dropdown/TextColor';
import Translate from '../components/translate/Translate';
import Route from '../components/nav/Route';
import Navbar from '../components/nav/Navbar';
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

const navItems = [
  {
    id: generateRandomId(),
    href: '/',
    label: 'Accordion',
  },
  {
    id: generateRandomId(),
    href: '/list',
    label: 'List',
  },
  {
    id: generateRandomId(),
    href: '/dropdown',
    label: 'Dropdown',
  },
  {
    id: generateRandomId(),
    href: '/translate',
    label: 'Translate',
  },
]

const languageOptions = [
  {
    id: generateRandomId(),
    label: 'Czech',
    value: 'cs',
  },
  {
    id: generateRandomId(),
    label: 'Danish',
    value: 'da',
  },
  {
    id: generateRandomId(),
    label: 'Dutch',
    value: 'nl',
  },
  {
    id: generateRandomId(),
    label: 'English',
    value: 'en',
  },
  {
    id: generateRandomId(),
    label: 'Esperanto',
    value: 'eo',
  },
  {
    id: generateRandomId(),
    label: 'Finnish',
    value: 'fi',
  },
  {
    id: generateRandomId(),
    label: 'French',
    value: 'fr',
  },
  {
    id: generateRandomId(),
    label: 'German',
    value: 'de',
  },
  {
    id: generateRandomId(),
    label: 'Italian',
    value: 'it',
  },
  {
    id: generateRandomId(),
    label: 'Japanese',
    value: 'ja',
  },
  {
    id: generateRandomId(),
    label: 'Korean',
    value: 'ko',
  },
  {
    id: generateRandomId(),
    label: 'Spanish',
    value: 'es',
  },
];

const App = () => {
  return (
    <div>
      <h1>Widgets</h1>
      <Navbar navItems={navItems} />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search defaultSearchTerm="" />
      </Route>
      <Route path="/dropdown">
        <TextColor colors={colors} />
      </Route>
      <Route path="/translate">
        <Translate  languageOptions={languageOptions} />
      </Route>
    </div>
  );
}

export default App;
