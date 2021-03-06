import React, { useState, useEffect } from 'react';
import axios from 'axios';
import secrets from './secrets';

const Convert = ({targetLanguage, text}) => {
  const [debouncedText, setDebouncedText] = useState(text);
  const [translatedText, setTranslatedText] = useState('');


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 350)
    return (() => {
      clearTimeout(timeoutId)
    })
  }, [text])

  useEffect(() => {
    const fetchTranslation = async (targetLanguage, debouncedText) => {
      const response = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: targetLanguage.value,
            key: secrets.key,
          },
        },
      );
      setTranslatedText(response.data.data.translations[0].translatedText)
    };
    fetchTranslation(targetLanguage, debouncedText);
  }, [debouncedText, targetLanguage])

  return (
    <div>
      <p>{translatedText}</p>
    </div>
  )
}

export default Convert;
