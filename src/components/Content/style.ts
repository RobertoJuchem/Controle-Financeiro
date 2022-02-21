import styled from "styled-components";

export const Container = styled.div`
   background-color: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.white};
   grid-area: CT;
   height: calc(100vh - 70px);
   overflow-y: scroll;
   padding: 25px;
`