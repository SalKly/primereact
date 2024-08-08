'use client';
import { PrimeReactProvider, PrimeStyleSheet } from '@primereact/core/config';
import Aura from '@primereact/themes/aura';
import { useServerInsertedHTML } from 'next/navigation';
import React from 'react';

export default function StyleRegistry({ children }: { children: React.ReactNode }) {
    const [styledStyleSheet] = React.useState(() => new PrimeStyleSheet());

    useServerInsertedHTML(() => {
        const styleElements = styledStyleSheet.getAllElements();
        styledStyleSheet.clear();
        return <>{styleElements}</>;
    });

    if (typeof window !== 'undefined') return <>{children}</>;

    const value = {
        theme: {
            preset: Aura
        }
    };

    return (
        <PrimeReactProvider value={value} sheet={styledStyleSheet}>
            {children}
        </PrimeReactProvider>
    );
}
