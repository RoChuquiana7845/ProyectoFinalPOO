import { createContext, useContext, useState} from 'react';

const themeContext = createContext();

export const useTheme = () => {
    const themePro = useContext(themeContext);
    if (!themePro) { 
        throw new Error('there is not a context in theme');
    }
    return themePro
}; 


// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('');

    const handleTheme = (newtheme) => {
        setTheme(newtheme);
    }

    return(
        <themeContext.Provider value= {{theme, handleTheme}}>
            {children}
        </themeContext.Provider>
    )
}
