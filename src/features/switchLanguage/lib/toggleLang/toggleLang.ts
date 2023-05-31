type langType = 'ru' | 'en' | 'it';

export const toggleLang = (lang: string): langType => {
    switch (lang) {
    case 'ru':
        return 'en';
    case 'en':
        return 'it';
    case 'it':
        return 'ru';
    default:
        return 'ru';
    }
};
