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

   @media(max-width: 770px){
      width: 100%;
      >header h1{
         font-size: 24px;

         >img{
            height: 20px;
            width: 20px;
         }
      }

      >header p, footer span{
         font-size: 14px;
      }
   }

   @media(max-width: 420px){
      width: 100%;
      height: auto;

      >header p{
         margin-bottom: 15px;
      }
   }
`