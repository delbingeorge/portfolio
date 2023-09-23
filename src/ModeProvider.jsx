import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ModeContext = createContext();

export function useMode() {
    return useContext(ModeContext);
}

export function ModeProvider({ children }) {
    const [mode, setMode] = useState('light');
    const [id, setID] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get('https://raw.githubusercontent.com/delbingeorge/portfolio-database/json-data/article-data.json')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
    };

    const contextValue = {
        mode,
        toggleMode,
        data,
        id,
        setID
    };

    return (
        <ModeContext.Provider value={contextValue}>
            {children}
        </ModeContext.Provider>
    );
}
