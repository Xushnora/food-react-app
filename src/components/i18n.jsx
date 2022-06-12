import {initReactI18next } from "react-i18next";
import i18n from "i18next";

import transUz from '../assets/Uz.json'
import transEng from '../assets/Eng.json'
import transRu from '../assets/Ru.json'


const resources ={
    eng: {
        translation:transEng
    },
    ru: {
        translation:transRu
    },
    uz: {
        translation:transUz
    },
}


i18n
  .use(initReactI18next) 
  .init({
    resources: resources,
    lng: "eng", 
    fallbackLng: "eng",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n
