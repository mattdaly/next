import { Logo } from './Logo';

export function LayoutHeader(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} className="h-16 grow-0 shrink-0 bg-blue-900 items-center gap-4 p-4 flex">
            <Logo />
            <nav className="flex h-full grow items-center gap-2">{props.children}</nav>
        </div>
    );
}
