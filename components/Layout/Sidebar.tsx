import clsx from 'clsx';
import BaseLink from 'next/link';

export function LayoutSidebar(props: React.HTMLAttributes<HTMLDivElement>) {
    const className = clsx(
        'bg-grey-50 h-full w-64 shrink-0 grow-0 border-r-2 border-black/[.08] p-3 flex flex-col gap-1',
        props.className
    );

    return <nav {...props} className={className} />;
}

function Link(props: any) {
    const className = clsx(
        'flex w-full items-center rounded leading-8 !text-black px-2 focus-visible:yt-focus-dark',
        'hover:bg-black/[.06] aria-current-page:bg-blue-500/[.1]'
    );

    return <BaseLink {...props} className={className} />;
}

LayoutSidebar.Link = Link;
