import styled from "styled-components";

export const Container = styled.button`
   background-color: ${props=>props.theme.colors.warning};
   border-radius: 5px;
   color: ${props=>props.theme.colors.white};
   font-weight: bold;
   margin: 7px 0;
   padding: 10px;
   transition: opacity .3s;
   width: 100%;

   &:hover{
      opacity: .7;
   }
`