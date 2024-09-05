// 2(Two) mainIMP thing for contexts to import

import { createContext, useContext } from "react";

export const ThemeContext = createContext(
    //isme object pass krna he
    {
        themeMode: "Light",
        darktheme: () => {},
        lighttheme: () => {},
    }

)

export const ThemeProvider = ThemeContext.Provider
//ThemeProvider lege wrap kr dege.

// custom hooks.
//helps us in, hr baar do do file import krne ki zarurat nahi padegi.
//iss function se saare ThemeContext ke elemts ko access kr sakte he.

export default function useTheme()
{
    return useContext(ThemeContext)
}