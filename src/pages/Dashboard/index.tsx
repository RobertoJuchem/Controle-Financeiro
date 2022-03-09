import React, {useState, useMemo} from "react";

import {Container, Content} from './style';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MenssageBox";
import PieGraphic from "../../components/PieGraphic";
import HistoryLineBox from "../../components/HistoryLineBox";

import listOfMonths from '../../utils/months';
import expenses from "../../dataBase/expenses";
import gains from "../../dataBase/gains";

import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";
import grinningImg from "../../assets/grinning.svg";

const Dashboard: React.FC= () => {
   const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth()+1);
   const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

   const months = useMemo(()=>{
      return listOfMonths.map((month, index)=> {
         return {
            value: index + 1,
            label: month
         }
      })
   },[]);

   const years = useMemo(() => {
      let uniqueYears: number[] = [];

      [...expenses, ...gains].forEach(item => {
         const date = new Date(item.date)
         const year = date.getFullYear()

         if(!uniqueYears.includes(year)){
            uniqueYears.push(year)
         }
      })
      return uniqueYears.map(year => {
         return {value: year, label: year}
      })

   },[]);

   const totalExpenses = useMemo(() => {
      let total: number = 0

      expenses.forEach(item => {
         const date = new Date(item.date)
         const year = date.getFullYear()
         const month = date.getMonth()+1

         if(month === monthSelected && year === yearSelected){
            try{
               total += Number(item.amount)
            }catch{
               throw new Error('Invalid amount. Amount must be number.')
            }
         }
      })
      return total
   },[monthSelected, yearSelected]);

   const totalGains = useMemo (() => {
      let total:number = 0

      gains.forEach(item => {
         const date = new Date(item.date)
         const year = date.getFullYear()
         const month = date.getMonth()+1

         if(month === monthSelected && year === yearSelected){
            try{
               total += Number(item.amount)
            }catch{
               throw new Error('Invalid amount. Amount must be number.')
            }
         }
      })
      return total
   },[monthSelected, yearSelected]);

   const totalBalance = useMemo(() => {
      return totalGains - totalExpenses
   },[totalGains, totalExpenses]);

   const messageCard = useMemo(() => {
      if(totalBalance < 0){
         return {
            title:"Que trite!",
            description:"Neste mês sua carteira está negativa!",
            footerText:"Verifique seus gastos!",
            icon: sadImg
         }
      } else if(totalBalance > 0){
         return {
            title:"Muito bem!",
            description:"Sua carteira está positiva!",
            footerText:"Continue assim. Considere investir o seu saldo.",
            icon: happyImg
         }
      } else{
         return {
            title:"Ufa!",
            description:"Bateu na trave!",
            footerText:"Revise suas despesas, aumente seus rendimentos.",
            icon: grinningImg
         }
      }

   },[totalBalance]);

   const relationExpensesGains = useMemo(() => {
      const total = totalGains + totalExpenses
      const gainsPercent = (totalGains / total) * 100
      const expensesPercent = (totalExpenses / total) * 100

      const PizzaData = [
         {
            name: 'entradas',
            value: totalGains,
            percent: Number(gainsPercent.toFixed(1)),
            color: '#e44c4e'
         },
         {
            name: 'saidas',
            value: totalExpenses,
            percent: Number(expensesPercent.toFixed(1)),
            color: '#f7931b'
         }
      ]
      return PizzaData
   },[totalGains, totalExpenses]);

   const historyLineData = useMemo(() => {
      return listOfMonths.map((_, month) => {
         let amountEntry = 0
         gains.forEach(gain => {
            const date = new Date(gain.date)
            const gainMonth = date.getMonth()
            const gainYear = date.getFullYear()

            if(gainMonth === month && gainYear === yearSelected){
               amountEntry += Number(gain.amount)
            }
         })

         let amountOutput = 0
         expenses.forEach(expense => {
            const date = new Date(expense.date)
            const expenseMonth = date.getMonth()
            const expenseYear = date.getFullYear()

            if(expenseMonth === month && expenseYear === yearSelected){
               amountOutput += Number(expense.amount)
            }
         })

         return {
            monthNumber: month,
            month: listOfMonths[month].substr(0, 3),
            amountEntry,
            amountOutput
         }
      })
   },[yearSelected]);

   const handleMonthSelected = (month: string) => {
      try{
         const parseMonth = Number(month)
         setMonthSelected(parseMonth)
      }catch{
         throw new Error('Invalid month value. Is accept 0 - 24.')
      }
   };

   const handleYearSelected = (year: string) => {
      try{
         const parseYear = Number(year)
         setYearSelected(parseYear)
      }catch{
         throw new Error('Invalid month value. Is accept integer number.')
      }
   };

   return(
      <Container>
         <ContentHeader title='Dashboard' lineColor='#f7931b'>
            <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected} />
            <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected} />
         </ContentHeader>

         <Content>
            <WalletBox
               title="saldo"
               amount={totalBalance}
               footerLabel='atualizado com base nas entradas e saídas'
               icon="dolar"
               color="#4e41f0"
            />

            <WalletBox
               title="entradas"
               amount={totalGains}
               footerLabel='atualizado com base nas entradas e saídas'
               icon="arrowUp"
               color="#f7931b"
            />

            <WalletBox
               title="saídas"
               amount={totalExpenses}
               footerLabel='atualizado com base nas entradas e saídas'
               icon="arrowDown"
               color="#e44c4e"
            />

            <MessageBox
               title={messageCard.title}
               description={messageCard.description}
               footerText={messageCard.footerText}
               icon={messageCard.icon}
            />

            <PieGraphic data={relationExpensesGains}/>

            <HistoryLineBox
               data={historyLineData}
               lineColorAmountEntry='#f7931b'
               lineColorAmountOutput='#e44c4e'
            />
         </Content>
      </Container>
   )
};

export default Dashboard