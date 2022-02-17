import styled from "styled-components";

interface IContainerProps {
   color: string
}

interface ITagProps {
   color: string
}

export const Container = styled.li<IContainerProps>`
   align-items: center;
   background-color: ${props => props.color};
   border-radius: 5px;
   cursor: pointer;
   display: flex;
   justify-content: space-between;
   list-style: none;
   margin: 10px;
   padding: 5px 10px;
   position: relative;
   transition: all.3s;

   &:hover{
      opacity: .7;
      transform: translateX(10px);
   }

   >div{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 10px;
   }
`

export const Tag = styled.div<ITagProps>`
   background-color: ${props => props.color};
   border-radius: 3px;
   left: 0;
   position: absolute;
   width: 10px;
   height: 80%;
`