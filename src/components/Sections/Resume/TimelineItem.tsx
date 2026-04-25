import Image from 'next/image';
import {FC, memo} from 'react';

import type {TimelineItem as TimelineEntry} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineEntry}> = memo(({item}) => {
  const {title, date, location, content, logoSrc} = item;
  return (
    <div className="flex flex-col items-center gap-4 pb-8 last:pb-0 md:flex-row md:items-start md:gap-6">
      {logoSrc && (
        <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-md md:h-20 md:w-20">
          <Image alt={`${location} logo`} className="h-full w-full object-contain" src={logoSrc} />
        </div>
      )}

      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-col pb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex items-center justify-center gap-x-2 md:justify-start">
            <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
            <span>•</span>
            <span className="flex-1 text-sm sm:flex-none">{date}</span>
          </div>
        </div>
        {content}
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
