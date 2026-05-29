import classNames from 'classnames';
import {FC, memo, PropsWithChildren, useEffect, useRef, useState} from 'react';

import {SectionId} from '../../data/data';

const Section: FC<
  PropsWithChildren<{sectionId: SectionId; sectionTitle?: string; noPadding?: boolean; className?: string}>
> = memo(({children, sectionId, noPadding = false, className}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={classNames(
        'transform-gpu transition-all duration-700 ease-out motion-reduce:transition-none',
        {'opacity-100 blur-0 translate-y-0': isVisible, 'opacity-0 blur-[2px] translate-y-6': !isVisible},
        className,
        {'px-4 py-16 md:py-24 lg:px-8': !noPadding},
      )}
      id={sectionId}
      ref={sectionRef}
    >
      <div className={classNames('transition-opacity duration-700 ease-out', {'mx-auto max-w-screen-lg': !noPadding})}>
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';
export default Section;
