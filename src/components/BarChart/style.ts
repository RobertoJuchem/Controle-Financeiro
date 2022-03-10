import styled from "styled-components";

export const Container = styled.div`
   background-color: ${props=>props.theme.colors.tertiary};
   border-radius: 8px;
   color: ${props=>props.theme.colors.white};
   margin: 10px 0;
   min-height: 260px;
   width: 48%;

`

export const SideLeft = styled.div`
   padding: 30px 20px;

   >h2{
      margin-bottom: 10px;
      padding-left: 16px;
   }
`

export const SideRight = styled.div`
   flex: 1;
`