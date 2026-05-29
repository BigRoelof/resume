import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string; contentClassName?: string}>> = memo(
  ({title, children, contentClassName}) => {
    return (
      <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
        <div className="col-span-1 flex justify-center md:justify-start">
          <div className="relative h-max">
            <h2 className="text-xl font-bold uppercase text-neutral-800">{title}</h2>
            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
          </div>
        </div>
        <div
          className={
            contentClassName ??
            'col-span-1 flex flex-col rounded-2xl border border-neutral-200/80 bg-gradient-to-br from-neutral-100 via-neutral-200/50 to-neutral-100 px-5 py-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg md:col-span-3 md:px-8 md:py-7'
          }
        >
          {children}
        </div>
      </div>
    );
  },
);

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
