import React, { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import Convert from './Convert';
import generateRandomId from '../../util/generateRandomId';

const languageOptions = [
  {
    id: generateRandomId(),
    label: 'Czech',
    value: 'cs'
  },
  {
    id: generateRandomId(),
    label: 'Danish',
    value: 'da'
  },
  {
    id: generateRandomId(),
    label: 'Dutch',
    value: 'nl'
  },
  {
    id: generateRandomId(),
    label: 'English',
    value: 'en'
  },
  {
    id: generateRandomId(),
    label: 'Esperanto',
    value: 'eo'
  },
  {
    id: generateRandomId(),
    label: 'Finnish',
    value: 'fi'
  },
  {
    id: generateRandomId(),
    label: 'French',
    value: 'fr'
  },
  {
    id: generateRandomId(),
    label: 'German',
    value: 'de'
  },
  {
    id: generateRandomId(),
    label: 'Italian',
    value: 'it'
  },
  {
    id: generateRandomId(),
    label: 'Japanese',
    value: 'ja'
  },
  {
    id: generateRandomId(),
    label: 'Korean',
    value: 'ko'
  },
  {
    id: generateRandomId(),
    label: 'Spanish',
    value: 'es'
  },
]

const Translate = () => {
  const [targetLanguage, setTargetLanguage] = useState(languageOptions[0])
  const [inputText, setInputText] = useState('');
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(inputText);
    setInputText('');
  }

  return (
    <div>
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Enter text to translate:</label>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
      </form>
      <Dropdown
        options={languageOptions}
        dropdownText="Choose source language"
        selection={targetLanguage}
        onSelectionChange={setTargetLanguage}
      />
      <hr />
      <h3 className="header">Translated Text:</h3>
      <Convert targetLanguage={targetLanguage} text={inputText} />
    </div>
  )

};

export default Translate;
