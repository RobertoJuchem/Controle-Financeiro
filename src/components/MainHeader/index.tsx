import React, {useMemo, useState} from "react";
import { Container, Profile, Welcome, UserName } from "./style";
import emojis from "../../utils/emojis";
import Toggle from '../Toggle'
import { useTheme } from '../../hooks/theme';

const MainHeader: React.FC = () => {
   const  {toggleTheme, theme} = useTheme()

   const [darkTheme, setDarktheme] = useState(() => theme.title === 'dark' ? true : false)

   const handleChangeTheme = () => {
      setDarktheme(!darkTheme)
      toggleTheme()
   }

   const emoji = useMemo(() => {
      const indice = Math.floor(Math.random() * emojis.length)
      return emojis[indice]
   },[])
   
   return (
      <Container>
         <Toggle labelLeft="Light" labelRight="Dark" checked={darkTheme} onChange={handleChangeTheme}/>

         <Profile>
            <Welcome>Olá, {emoji}</Welcome>
            <UserName>Roberto Martins</UserName>
         </Profile>
      </Container>
   )
}

export default MainHeader