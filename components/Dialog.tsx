'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export function Dialog({ parentUrl, ...props }) {
    const router = useRouter();

    const handleClick = event => {
        if (event.target === event.currentTarget) {
            router.back();
            // waiting for https://github.com/vercel/next.js/issues/49662 to be fixed
            // router.push(parentUrl);
        }
    };

    const handleKeyDown = event => {
        if (event.key === 'Escape') {
            router.back();
            // waiting for https://github.com/vercel/next.js/issues/49662 to be fixed
            // router.push(parentUrl);
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="bg-black/[.5] fixed top-0 bottom-0 left-0 right-0" onClick={handleClick}>
            <div {...props} className="mt-8 bg-white rounded p-6 w-sm mx-auto relative">
                <button className="absolute top-0 right-0 mt-4 mr-4" onClick={handleClick}>
                    X
                </button>
                {props.children}
            </div>
        </div>
    );
}
