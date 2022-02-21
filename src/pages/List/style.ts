import styled from "styled-components";

export const Container = styled.div``

export const Filters = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 30px;
   width: 100%;

   .tag-filter{
      font-size: 18px;
      font-weight: 500;
      background: none;
      color: ${porps=> porps.theme.colors.white};

      margin: 0 10px;
      transition: opacity .3s;

      &:hover{
         opacity: .7;
      }
   }

   .tag-filter-recurrent:after{
         content: '';
         border-bottom: 10px solid ${props => props.theme.colors.warning};
         display: block;
         margin: 0 auto;
         width: 55px;
   }

   .tag-filter-eventual:after{
         content: '';
         border-bottom: 10px solid ${props => props.theme.colors.success};
         display: block;
         margin: 0 auto;
         width: 55px;
   }
`

export const Content = styled.div``