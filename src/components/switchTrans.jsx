import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <div className='translation'>
      <button onClick={() => changeLanguage('en')} >English</button>
      <button onClick={() => changeLanguage('fr')}>French</button>
    </div>
  );
}

export default LanguageSwitcher;