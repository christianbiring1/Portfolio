import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import toast from 'react-hot-toast';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    const language = lng === 'en' ? 'English' : 'French';
    const currentLanguage = i18n.language;
    if(lng === currentLanguage) return;
    
    toast.promise(i18n.changeLanguage(lng), {
      loading: 'Transating...',
      success: `${language} Translation completed`,
      error: 'Failed to translate',
    });
  };

  console.log(i18n.language)


  return (
    <div className='translation'>
      <button onClick={() => changeLanguage('en')}><ReactCountryFlag countryCode='GB' svg/><span>en</span></button>
      <button onClick={() => changeLanguage('fr')}><ReactCountryFlag countryCode='FR' svg/><span>fr</span></button>
    </div>
  );
}

export default LanguageSwitcher;