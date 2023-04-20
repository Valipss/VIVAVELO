import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en',
        resources: {
            fr: {
                translations: {
                    "Online": "En Ligne",
                    "Offline": "Hors Ligne",
                    "yes": "oui",
                    "no": "non",
                    "Available V'Lille": "V'Lille disponibles",
                    "Available parking": "Places disponibles",
                    "CC payment" : "Paiement CB",
                    "Find a V'Lille station" : "Trouver une station V'Lille"
                }
            },
            en: {
                translations: {
                    "Online": "Online",
                    "Offline": "Offline",
                    "yes": "yes",
                    "no": "no",
                    "Available V'Lille": "Available V'Lille",
                    "Available parking": "Available Parking",
                    "CC payment": "CC payment",
                    "Find a V'Lille station" : "🔎 Find a V'Lille station"
                }
            }
        },
        fallbackLng: "fr",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
