import {createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState} from 'react';

export type Locale = 'en' | 'nl';

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const localeStorageKey = 'resume-locale';

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export const LocaleProvider: FC<PropsWithChildren> = ({children}) => {
  const [locale, setLocaleState] = useState<Locale>('nl');

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(localeStorageKey);

    if (savedLocale === 'en' || savedLocale === 'nl') {
      setLocaleState(savedLocale);
      return;
    }

    if (window.navigator.language.toLowerCase().startsWith('nl')) {
      setLocaleState('nl');
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(localeStorageKey, locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      toggleLocale: () => setLocaleState(currentLocale => (currentLocale === 'en' ? 'nl' : 'en')),
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = (): LocaleContextValue => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }

  return context;
};
