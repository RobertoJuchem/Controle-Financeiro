import styled from "styled-components";

export const Container = styled.div`
   background-color: ${props => props.theme.colors.tertiary};
   border-radius: 8px;
   color: ${props=> props.theme.colors.white};
   height: 320px;
   margin: 10px 0;
   padding: 30px 20px;
   width: 100%;
`
export const Header = styled.header`
   display: flex;
   justify-content: space-between;

   >h2{
      margin-bottom: 2px;
      padding-left: 18px;
   }
`

export const LegendContainer = styled.ul`
   display: flex;
   list-style: none;
   padding-right: 15px;
`

export const Legend = styled.li`
   align-items: center;
   display: flex;
   margin-bottom: 8px;

   >div{
      background-color: ${props => props.color};
      border-radius: 5px;
      font-size: 16px;
      height: 10px;
      line-height: 40px;
      padding-left: 15px;
      text-align: center;
      width: 50px;
   }

   >span{
      margin-left: 5px;
      margin-right: 5px;
   }
`