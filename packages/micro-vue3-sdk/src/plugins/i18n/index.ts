import { createI18n } from 'vue-i18n';

interface BeforeInterface {
    supportLanList: string[];
    defaultLan: string;
    localLang: string;
    currentLang: string;
}

export const supportLanList = ['zh', 'en'];
export const defaultLan = 'en';

export const localLang = navigator.language.split('-')[0];

export const storageLang =
    window.localStorage.getItem('locale')
        ?.toLocaleLowerCase() || defaultLan;

export const currentLang = !supportLanList.includes(storageLang.toLocaleLowerCase())
        ? defaultLan
        : storageLang;

export function registerI18n(app, messages: Record<string, any>, lifeCycles?: { before: (config: BeforeInterface) => boolean }) {
    if (lifeCycles?.before?.({ supportLanList, defaultLan, localLang, currentLang })){
        const i18n = createI18n({
            globalInjection: true,
            locale: currentLang || localLang || defaultLan,
            messages: messages,
        });
        app.use(i18n);
    }
    return null;
}


