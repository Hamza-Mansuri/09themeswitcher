
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  
  const [themeMode , setThemeMode] = useState("light")

  //same name ka function banao, unki functionality automatic unke ansdr chali jaati he.

  const darktheme = () => {
    setThemeMode("dark")
  }

  const lighttheme = () => {
    setThemeMode("light")
  }


  //actual change in theme
  useEffect(() => {

    document.querySelector('html').classList.remove("light","dark")

    document.querySelector('html').classList.add(themeMode)

  },[themeMode])

  return (
    <ThemeProvider value = {{ themeMode, lighttheme, darktheme }}>

      <div className="flex flex-wrap min-h-screen items-center">

        <div className="w-full">

          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

            <ThemeBtn />

          </div>

          <div className="w-full max-w-sm mx-auto">

            <Card />

          </div>

        </div>

        </div>

    </ThemeProvider>
  )
}

export default App
