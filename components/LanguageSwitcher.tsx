
import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Language } from '../types';
import { GlobeAltIcon } from './IconComponents';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLocalization();

  const toggleLanguage = () => {
    const newLanguage = language === Language.EN ? Language.RW : Language.EN;
    setLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
      aria-label="Toggle language"
    >
      <GlobeAltIcon className="w-5 h-5" />
      <span className="font-semibold text-sm">
        {language === Language.EN ? 'RW' : 'EN'}
      </span>
    </button>
  );
};
