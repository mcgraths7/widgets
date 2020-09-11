import React, { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import Convert from './Convert';

const languageOptions = [
  {
    label: 'Czech',
    value: 'cs'
  },
  {
    label: 'Danish',
    value: 'da'
  },
  {
    label: 'Dutch',
    value: 'nl'
  },
  {
    label: 'English',
    value: 'en'
  },
  {
    label: 'Esperanto',
    value: 'eo'
  },
  {
    label: 'Finnish',
    value: 'fi'
  },
  {
    label: 'French',
    value: 'fr'
  },
  {
    label: 'German',
    value: 'de'
  },
  {
    label: 'Italian',
    value: 'it'
  },
  {
    label: 'Japanese',
    value: 'ja'
  },
  {
    label: 'Korean',
    value: 'ko'
  },
  {
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
