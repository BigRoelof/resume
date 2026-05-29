import classNames from 'classnames';
import {FC, memo, PropsWithChildren, useEffect, useMemo, useRef, useState} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  const groupRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = groupRef.current;

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
        threshold: 0.35,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="rounded-2xl border border-neutral-200/50 bg-neutral-300/60 p-4 shadow-sm shadow-neutral-950/20 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
      ref={groupRef}
    >
      <span className="mb-4 block text-center text-lg font-bold text-neutral-900">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} {...{index, isVisible, skill}} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{index: number; isVisible: boolean; skill: SkillType}> = memo(({index, isVisible, skill}) => {
  const {name, subtitle, level, max = 10} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);
  const animationDelay = `${index * 100}ms`;

  return (
    <div className="flex flex-col gap-y-1">
      <div className="px-2">
        <span className="text-base font-semibold text-neutral-900">{name}</span>
      </div>
      {subtitle && <span className="px-2 text-sm font-medium text-neutral-600">{subtitle}</span>}
      <div className="h-5 w-full overflow-hidden rounded-full border border-neutral-500/60 bg-neutral-700/70 p-0.5 shadow-inner shadow-neutral-950/20">
        <div
          className={classNames(
            'h-full origin-left rounded-full bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 shadow-[0_0_14px_rgba(251,191,36,0.18)] transition-transform duration-1000 ease-out motion-reduce:transition-none',
            {'scale-x-100': isVisible, 'scale-x-0': !isVisible},
          )}
          style={{transform: isVisible ? `scaleX(${percentage / 100})` : 'scaleX(0)', transitionDelay: animationDelay}}
        />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
