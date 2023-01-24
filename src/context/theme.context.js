import { createContext, useState } from "react";

const ThemeContext = createContext()

function ThemeWrapper(props) {

    const [darkMode, setDarkMode] = useState(false)
    // const [buttonText, setButtonText] = useState("Dark")

    const darkTheme = {
      backgroundColor: "black",
      color: "darkGray"
    }
  
    const lightTheme = {
      backgroundColor: "rgba(85, 116, 106, 0.3)",
      color: "black"
    }

    const darkThemeBtn = {
        backgroundColor: "white",
    }
     
    const lightThemeBtn = {
        backgroundColor: "black",
        color: "white",
    }
  
  
    const toggleTheme = () => {
      setDarkMode(!darkMode)
    }
  
    const changeTheme = () => {
      return darkMode === true ? darkTheme : lightTheme
    }

    const changeThemeBtn = () => {
        return darkMode === true ? darkThemeBtn : lightThemeBtn
    }


      
    const passedContext = {
        changeTheme,
        toggleTheme,
        changeThemeBtn,
        darkMode
        }
    
        return (
            <ThemeContext.Provider value={passedContext}>
                {props.children}
            </ThemeContext.Provider>
        )

}



export {
    ThemeContext,
    ThemeWrapper
}