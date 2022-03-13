import styled from "styled-components";

export const Container = styled.div`
   align-items: center;
   background-color: ${props => props.theme.colors.primary};
   display: flex;
   flex-direction: column;
   height: 100vh;
   justify-content: center;
`

export const Logo = styled.div`
   align-items: center;
   display: flex;
   margin-bottom: 30px;

   >h2{
      color: ${props => props.theme.colors.white};
      margin-left: 8px;
   }

   >img{
      height: 40px;
      width: 40px;
   }
`

export const Form = styled.form`
   background-color: ${props => props.theme.colors.tertiary};
   border-radius: 10px;
   height: 300px;
   padding: 30px;
   width: 300px;
`

export const FormTitle = styled.h1`
   color: ${props => props.theme.colors.white};
   margin-bottom: 40px;

   &:after {
      content: '';
         border-bottom: 10px solid ${props => props.theme.colors.warning};
         display: block;
         width: 55px;
   }
`
