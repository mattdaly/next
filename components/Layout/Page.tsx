import React from 'react';

export function LayoutPage(props: React.HTMLAttributes<HTMLDivElement>) {
    return <div {...props} className="flex grow overflow-hidden" />;
}
