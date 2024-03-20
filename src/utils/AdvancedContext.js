import React, { useState, createContext } from 'react';

// Create the context
export const AdvancedViewContext = createContext();

// Provider component
function AdvancedViewProvider({ children }) {
    const [isAdvancedView, setIsAdvancedView] = useState(false);

    return (
        <AdvancedViewContext.Provider value={{ isAdvancedView, setIsAdvancedView }}>
            {children}
        </AdvancedViewContext.Provider >
    );
}


export default AdvancedViewProvider;