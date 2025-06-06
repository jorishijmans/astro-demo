
const allLanguages = {
	en: 'English',
	nl: 'Nederlands',
    de: 'Deutsch',
	fr: 'Français',
} as const;

export default import.meta.env?.allLanguages;
