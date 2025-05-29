// import StaticComponent from './components/StaticComponent/StaticComponent' 
// import UserList from './components/UserList/UserList'
// import SearchPosts from './components/SearchPosts/SearchPosts'
import { useContext, createContext, useState } from "react"
import Counter from './components/Counter/Counter'
import './App.css'
import React from 'react'

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )

}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return(
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#FFF' : '#333',
        color: theme === 'light' ? '#000' : '#FFF',
      }}
    >
      Cambiar tema
    </button>
  )
}

function App() {
  // return <StaticComponent/>
  // return <UserList/>
  // return <SearchPosts/>
  // return <Counter/>
  return (
    <ThemeProvider>
      <ThemeButton/>
    </ThemeProvider>
  )
}

export default App
