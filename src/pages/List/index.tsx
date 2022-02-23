import React, {useMemo, useState, useEffect} from "react";
import { Container, Content, Filters } from "./style";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { useParams } from "react-router-dom";
import gains from '../../dataBase/gains'
import expenses from '../../dataBase/expenses'
import formatCurrency from "../../utils/formatCurrency";
import formatDate from '../../utils/formatDate'
import listOfMonths from '../../utils/months'

interface IData{
   id: string
   description: string
   amountFormatted: string
   frequency: string
   dateFormatted: string
   tagColor: string
}

const List: React.FC = () => {
   const [data, setData] = useState<IData[]>([])
   const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth()+1))
   const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()))

   const {type} = useParams()

   const title = useMemo (() => {
      return type === 'entry-balance' ? {titleName: 'Entradas', lineColor: '#f7931b'} : 
      {titleName: 'Saidas', lineColor: '#e44c4e'}
   },[type])

   // const lineColor = useMemo(() => {
   //    return type === 'entry-balance' ? '#f7931b' : '#e44c4e'
   // },[type])

   const listData = useMemo(() => {
      return type === 'entry-balance' ? gains : expenses
   },[])

   const months = useMemo(()=>{
      return listOfMonths.map((month, index)=> {
         return {
            value: index + 1,
            label: month
         }
      })
   },[])

   const years = useMemo(() => {
      let uniqueYears: number[] = []

      listData.forEach(item => {
         const date = new Date(item.date)
         const year = date.getFullYear()

         if(!uniqueYears.includes(year)){
            uniqueYears.push(year)
         }
      })
      return uniqueYears.map(year => {
         return {value: year, label: year}
      })

   },[listData])

   useEffect(() => {
      const filteredDate = listData.filter(item => {
         const date = new Date(item.date)
         const month = String(date.getMonth() + 1)
         const year = String(date.getFullYear())

         return month === monthSelected && year === yearSelected
      })

      const formattedDate = filteredDate.map(item => {
         return{
            id: String(Math.random() * filteredDate.length),
            description: item.description,
            amountFormatted: formatCurrency(Number(item.amount)),
            frequency: item.frequency,
            dateFormatted: formatDate(item.date),
            tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
         }
      })
      setData(formattedDate)
   },[listData, monthSelected, yearSelected, data.length])

   return (
      <Container>
         <ContentHeader title={title.titleName} lineColor={title.lineColor}>
            <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
            <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />
         </ContentHeader>

         <Filters>
            <button type="button" className="tag-filter tag-filter-recurrent">Recorrentes</button>
            <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
         </Filters>

         <Content>
            { data.map(item => (
               <HistoryFinanceCard
                  key={item.id}
                  tagColor={item.tagColor}
                  title={item.description}
                  subtitle={item.dateFormatted}
                  amount={item.amountFormatted}
               />
            ))}
         </Content>
      </Container>
   )
}

export default List