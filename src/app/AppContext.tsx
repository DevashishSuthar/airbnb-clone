'use client';

import React, { createContext, useState } from 'react';

interface AppProviderProps {
    children: React.ReactNode
};

export const AppContext = createContext<any>(null);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    let appProvider;
    const [location, setLocation] = useState<string>('');
    const [isFullSearchOpen, setIsFullSearchOpen] = useState<boolean>(false);

    appProvider = {
        location,
        isFullSearchOpen,
        setLocation,
        setIsFullSearchOpen
    };

    return (
        <AppContext.Provider value={appProvider}>
            {children}
        </AppContext.Provider>
    );
};