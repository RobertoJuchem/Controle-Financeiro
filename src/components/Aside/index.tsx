import React from "react";
import { Container, Header, LogImg, MenuContainer, MenuItemLink, Title } from "./style";
import logoImg from '../../assets/logo.svg'
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md'

const Aside: React.FC = () => {
   return (
      <Container>
         <Header>
            <LogImg src={logoImg} alt='Logo Controle Financeiro' />
            <Title>Controle Financeiro</Title>
         </Header>

         <MenuContainer>
            <MenuItemLink href='#'>
               <MdDashboard/>
               Dashboard
            </MenuItemLink>

            <MenuItemLink href='#'>
               <MdArrowUpward/>
               Entradas
            </MenuItemLink>

            <MenuItemLink href='#'>
               <MdArrowDownward/>
               Saídas
            </MenuItemLink>

            <MenuItemLink href='#'>
               <MdExitToApp/>
               Sair
            </MenuItemLink>
         </MenuContainer>
      </Container>
   )
}

export default Aside