import React from 'react';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import translationEN from './languages/en/translation.json';
import translationFR from './languages/fr/translation.json';

import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-responsive-modal/styles.css';
import './index.scss';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      fr: {
        translation: translationFR,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
