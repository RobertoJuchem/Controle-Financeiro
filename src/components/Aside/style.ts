import styled, {css} from "styled-components";

interface IContainerProps{
   menuIsOpen: boolean
}

export const Container = styled.div<IContainerProps>`
   border-right: 1px solid ${props => props.theme.colors.gray};
   background-color: ${props => props.theme.colors.secondary};
   grid-area: AS;
   padding-left: 20px;
   position: relative;

   @media (max-width: 600px){
      height: ${props => props.menuIsOpen ? '100vh' : '70px'};
      overflow: hidden;
      padding-left: 8px;
      position: fixed;
      width: 145px;
      z-index: 2;

      ${props => !props.menuIsOpen && css`
         border: none;
         border-bottom: 1px solid ${props => props.theme.colors.gray};
      `}
   }
`

export const Header = styled.div`
   align-items: center;
   display: flex;
   height: 70px;
`

export const LogImg = styled.img`
   height: 40px;
   width: 40px;

   @media (max-width: 600px){
      height: 25px;
      width: 25px;
   }
`

export const Title = styled.h3`
   color: ${props => props.theme.colors.white};
   margin-left: 10px;

   @media (max-width: 600px){
      display: none;
   }
`

export const MenuContainer = styled.nav`
   display: flex;
   flex-direction: column;
   margin-top: 50px;
`

export const MenuItemLink = styled.a`
   align-items: center;
   color: ${props => props.theme.colors.info};
   display: flex;
   margin: 7px 0;
   text-decoration: none;

   &:hover{
      opacity: .7;
      transition: opacity .3s;
   }

   >svg{
      font-size: 18px;
      margin-right: 5px;
   }
`

export const MenuItemButton = styled.button`
   align-items: center;
   background: none;
   border: none;
   color: ${props => props.theme.colors.info};
   display: flex;
   font-size: 16px;
   margin: 7px 0;

   &:hover{
      opacity: .7;
      transition: opacity .3s;
   }

   >svg{
      font-size: 18px;
      margin-right: 5px;
   }
`