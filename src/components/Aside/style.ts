import styled from "styled-components";

export const Container = styled.div`
   border-right: 1px solid ${props => props.theme.colors.gray};
   background-color: ${props => props.theme.colors.secondary};
   grid-area: AS;
   padding-left: 20px;
`

export const Header = styled.div`
   align-items: center;
   display: flex;
   height: 70px;
`

export const LogImg = styled.img`
   height: 40px;
   width: 40px;
`

export const Title = styled.h3`
   color: ${props => props.theme.colors.white};
   margin-left: 10px;
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