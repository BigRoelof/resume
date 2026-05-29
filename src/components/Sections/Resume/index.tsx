import {FC, memo} from 'react';

import {SectionId} from '../../../data/data';
import {useLocale} from '../../../context/LocaleContext';
import {getLocalizedContent} from '../../../data/localizedContent';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const {locale} = useLocale();
  const {education, experience, skills, resumeLabels} = getLocalizedContent(locale);

  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection
          contentClassName="col-span-1 flex flex-col rounded-2xl border border-neutral-200/80 bg-gradient-to-br from-neutral-100 via-neutral-200/50 to-neutral-100 px-5 py-6 shadow-sm md:col-span-3 md:px-8 md:py-7"
          title={resumeLabels.education}
        >
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection
          contentClassName="col-span-1 flex flex-col rounded-2xl border border-neutral-200/80 bg-gradient-to-br from-neutral-100 via-neutral-200/50 to-neutral-100 px-5 py-6 shadow-sm md:col-span-3 md:px-8 md:py-7"
          title={resumeLabels.work}
        >
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection
          contentClassName="col-span-1 flex flex-col rounded-2xl border border-neutral-200/80 bg-gradient-to-br from-neutral-100 via-neutral-200/50 to-neutral-100 px-5 py-6 shadow-sm md:col-span-3 md:px-8 md:py-7"
          title={resumeLabels.skills}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
