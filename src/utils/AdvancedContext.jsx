import React, { useState, createContext, useContext } from 'react';

// Create the context
export const AdvancedViewContext = createContext();

// Provider component
export function AdvancedViewProvider({ children }) {
    const [isAdvancedView, setIsAdvancedView] = useState(false);

    return (
        <AdvancedViewContext.Provider value={{ isAdvancedView, setIsAdvancedView }}>
            {children}
        </AdvancedViewContext.Provider>
    );
}
