import React from 'react';
import clsx from 'clsx';

export function LayoutContent(props: React.HTMLAttributes<HTMLDivElement>) {
    const className = clsx('flex flex-col grow shrink overflow-y-auto relative', props.className);

    return <main {...props} className={className} />;
}
