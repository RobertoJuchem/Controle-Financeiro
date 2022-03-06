import React, {useState, useMemo} from "react";
import {Container} from './style'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from "../../components/SelectInput";
import listOfMonths from '../../utils/months'
import expenses from "../../dataBase/expenses";
import gains from "../../dataBase/gains";

const Dashboard: React.FC= () => {
   const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth()+1)
   const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear())

   const months = useMemo(()=>{
      return listOfMonths.map((month, index)=> {
         return {
            value: index + 1,
            label: month
         }
      })
   },[])

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

   },[])

   const handleMonthSelected = (month: string) => {
      try{
         const parseMonth = Number(month)
         setMonthSelected(parseMonth)
      }catch(error){
         throw new Error('Invalid month value. Is accept 0 - 24.')
      }
   }

   const handleYearSelected = (year: string) => {
      try{
         const parseYear = Number(year)
         setYearSelected(parseYear)
      }catch(error){
         throw new Error('Invalid month value. Is accept integer number.')
      }
   }

   return(
      <Container>
         <ContentHeader title='Dashboard' lineColor='#f7931b'>
            <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected} />
            <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected} />
         </ContentHeader>
      </Container>
   )
}

export default Dashboard