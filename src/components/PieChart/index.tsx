import React from "react";
import { Container, SideLeft, LegendContainer, Legend, SideRight} from "./style";
//import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts'

const PieChart: React.FC = () => (
      <Container>
         <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
               <Legend color='#f7931b'>
                  <div>5%</div>
                  <span>Entradas</span>
               </Legend>
               <Legend color='#e44c4e'>
                  <div>95%</div>
                  <span>Saídas</span>
               </Legend>
            </LegendContainer>
         </SideLeft>

         <SideRight>

         </SideRight>
      </Container>
   )

export default PieChart