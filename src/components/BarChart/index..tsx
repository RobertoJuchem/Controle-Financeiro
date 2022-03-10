import React from "react";
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";
import { Container, SideLeft, SideRight } from "./style";

interface IBarChartProps {
   title: string
   data: {
      name: string,
      amount: number,
      percent: number,
      color: string
   }[]
}

const BarChartGraphic: React.FC<IBarChartProps> = ({title, data}) => {
   return (
      <Container>
         <SideLeft>
            <h2>{title}</h2>
         </SideLeft>

         <SideRight>
            <ResponsiveContainer>
               <BarChart data={data}>
                  <Bar dataKey='amount'>
                     {
                        data.map((indicator) => (
                           <Cell key={indicator.name}  cursor='pointer' fill={indicator.color} 
                  />))
                  }
                     
                  </Bar>
               </BarChart>
            </ResponsiveContainer>
         </SideRight>
      </Container>
   )
}

export default BarChartGraphic