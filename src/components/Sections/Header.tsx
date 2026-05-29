import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {SectionId} from '../../data/data';
import {useLocale} from '../../context/LocaleContext';
import {getLocalizedContent} from '../../data/localizedContent';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const {locale, toggleLocale} = useLocale();
  const {navLabels} = getLocalizedContent(locale);
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(
    () => [
      {id: SectionId.About, label: navLabels.about},
      {id: SectionId.Resume, label: navLabels.resume},
      {id: SectionId.Contact, label: navLabels.contact},
    ],
    [navLabels.about, navLabels.contact, navLabels.resume],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section.id}`).join(','), intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} locale={locale} toggleLocale={toggleLocale} />
      <DesktopNav currentSection={currentSection} navSections={navSections} locale={locale} toggleLocale={toggleLocale} />
    </>
  );
});

const DesktopNav: FC<{
  navSections: Array<{id: SectionId; label: string}>;
  currentSection: SectionId | null;
  locale: 'en' | 'nl';
  toggleLocale: () => void;
}> = memo(({navSections, currentSection, locale, toggleLocale}) => {
    const baseClass =
      '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
    const activeClass = classNames(baseClass, 'text-orange-500');
    const inactiveClass = classNames(baseClass, 'text-neutral-100');
    return (
      <header className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 py-6 px-4 backdrop-blur sm:block" id={headerID}>
        <div className="relative">
          <nav className="absolute inset-x-0 top-0 bottom-0 flex items-center justify-center">
            <div className="flex justify-center gap-x-8">
              {navSections.map(section => (
                <NavItem
                  activeClass={activeClass}
                  current={section.id === currentSection}
                  inactiveClass={inactiveClass}
                  key={section.id}
                  label={section.label}
                  section={section.id}
                />
              ))}
            </div>
          </nav>

          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <LanguageToggle locale={locale} onClick={toggleLocale} />
          </div>
        </div>
      </header>
    );
  },
);

const MobileNav: FC<{
  navSections: Array<{id: SectionId; label: string}>;
  currentSection: SectionId | null;
  locale: 'en' | 'nl';
  toggleLocale: () => void;
}> = memo(({navSections, currentSection, locale, toggleLocale}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    const baseClass =
      'p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500';
    const activeClass = classNames(baseClass, 'bg-neutral-900 text-white font-bold');
    const inactiveClass = classNames(baseClass, 'text-neutral-200 font-medium');
    return (
      <>
        <button
          aria-label="Menu Button"
          className="fixed right-2 top-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden"
          onClick={toggleOpen}>
          <Bars3BottomRightIcon className="h-8 w-8 text-white" />
          <span className="sr-only">Open sidebar</span>
        </button>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative w-4/5 bg-stone-800">
                <div className="flex items-center justify-between border-b border-stone-700 px-4 py-4">
                  <span className="text-sm font-bold uppercase tracking-wider text-neutral-300">Menu</span>
                  <LanguageToggle locale={locale} onClick={toggleLocale} />
                </div>
                <nav className="mt-5 flex flex-col gap-y-2 px-2">
                  {navSections.map(section => (
                    <NavItem
                      activeClass={activeClass}
                      current={section.id === currentSection}
                      inactiveClass={inactiveClass}
                      key={section.id}
                      onClick={toggleOpen}
                      label={section.label}
                      section={section.id}
                    />
                  ))}
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  },
);

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  label: string;
  onClick?: () => void;
}> = memo(({section, label, current, inactiveClass, activeClass, onClick}) => {
  return (
    <Link
      className={classNames(current ? activeClass : inactiveClass)}
      href={`/#${section}`}
      key={section}
      onClick={onClick}>
      {label}
    </Link>
  );
});

const LanguageToggle: FC<{locale: 'en' | 'nl'; onClick: () => void}> = memo(({locale, onClick}) => (
  <button
    aria-label={locale === 'en' ? 'Switch to Dutch' : 'Schakel naar Engels'}
    className="inline-flex items-center rounded-md border border-neutral-600/80 bg-neutral-950/80 px-3 py-1 text-sm font-bold uppercase tracking-wider text-neutral-100 transition-colors hover:border-orange-500 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
    onClick={onClick}
    type="button">
    {locale === 'en' ? 'EN' : 'NL'}
  </button>
));

Header.displayName = 'Header';
export default Header;
