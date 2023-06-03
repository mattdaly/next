'use client';

import clsx from 'clsx';
import './Progress.css';

export function Progress(props: React.HTMLAttributes<HTMLSpanElement>) {
    const className = clsx('bg-grey-100 rounded block h-1 overflow-hidden w-full', props.className);

    return (
        <span className={className}>
            <span className="block h-1w-full before:h-1 before:bg-grey-300 before:block before:animate-[progress-indeterminate_2s_cubic-bezier(0.4,0,0.2,1)_infinite] before:content-[' ']" />
        </span>
    );
}
