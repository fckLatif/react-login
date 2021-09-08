import { useState, useEffect } from 'react'
import { ReactComponent as LogoIcon } from './assets/svg/menu-icon.svg'
import { ReactComponent as RegisterIcon } from './assets/svg/register-icon.svg'
import { ReactComponent as LightIcon } from './assets/svg/light-icon.svg'
import { ReactComponent as DarkIcon } from './assets/svg/dark-icon.svg'
import { Navbar, NavTitle, NavItem } from './Navigation'
import { Form } from './Form'

function App() {
  const [ colorTheme, setColorTheme ] = useState('dark')

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color')
    if (currentThemeColor) {
      setColorTheme(currentThemeColor)
    }
  }, []);

  const handleClick = (theme) => {
    setColorTheme(theme)
    localStorage.setItem('theme-color', theme)
  }

  useEffect(() => {
    document.body.className = colorTheme;
  });

function RenderTheme() {
    if (colorTheme === 'dark') {
      return <NavItem icon={<DarkIcon />} text="Switch theme!" onclick={() => handleClick('light')} />
    } else {
      return <NavItem icon={<LightIcon />} text="Switch theme!" onclick={() => handleClick('dark')} />
    }
}

  return (
    <Navbar>
      <NavTitle text="CREEP" icon={<LogoIcon />} />
      <NavItem icon={<RegisterIcon />} text="Register" />
      <RenderTheme />
    </Navbar>
  );
}

export default App;
