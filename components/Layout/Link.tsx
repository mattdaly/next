import clsx from 'clsx';
import BaseLink from 'next/link';

export function Link(props: any) {
    const className = clsx(
        'flex h-8 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center',
        'focus:!shadow-none focus:!outline-none focus-visible:!yt-focus-dark',
        'bg-transparent hover:bg-white/[.08] focus:bg-white/[.08] aria-current-page:bg-white/[.08]',
        'text-white hover:text-white focus:text-white',
        'whitespace-nowrap px-3 rounded text-sm hidden lg:flex'
    );
    return <BaseLink {...props} className={className} />;
}
