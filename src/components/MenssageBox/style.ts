import styled from "styled-components";

export const Container = styled.div`
   background-color: ${props => props.theme.colors.tertiary};
   border-radius: 7px;
   color: ${props => props.theme.colors.white};
   display: flex;
   flex-direction: column;
   height: 260px;
   justify-content: space-between;
   margin: 10px 0;
   padding: 30px 20px;
   width: 48%;

   > header img{
      margin-left: 8px;
      width: 35px;
   }

   > header p{
      font-size: 18px;
   }
`