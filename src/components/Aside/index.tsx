import React, {useState} from "react";
import { Container, Header, ToggleMenu, LogImg, MenuContainer, MenuItemLink, MenuItemButton, Title } from "./style";
import logoImg from '../../assets/logo.svg'
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp, MdClose, MdMenu} from 'react-icons/md'
import { useAuth } from "../../hooks/auth";

const Aside: React.FC = () => {
   const [toggleMenuIsOpen, setToggleMenuIsOpen] = useState(false)

   const { signOut } = useAuth()

   const handleToggleMenu = () => {
      setToggleMenuIsOpen(!toggleMenuIsOpen)
   }

   return (
      <Container menuIsOpen={toggleMenuIsOpen}>
         <Header>
            <ToggleMenu onClick={handleToggleMenu}>
               {toggleMenuIsOpen ? <MdClose/> : <MdMenu/>}
            </ToggleMenu>

            <LogImg src={logoImg} alt='Logo Controle Financeiro' />
            <Title>Controle Financeiro</Title>
         </Header>

         <MenuContainer>
            <MenuItemLink href='/'>
               <MdDashboard/>
               Dashboard
            </MenuItemLink>

            <MenuItemLink href='/List/entry-balance'>
               <MdArrowUpward/>
               Entradas
            </MenuItemLink>

            <MenuItemLink href='/List/exit-balance'>
               <MdArrowDownward/>
               Saídas
            </MenuItemLink>

            <MenuItemButton onClick={signOut}>
               <MdExitToApp/>
               Sair
            </MenuItemButton>
         </MenuContainer>
      </Container>
   )
}

export default Aside