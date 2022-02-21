import React from "react";
import { Container, Content, Filters } from "./style";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

const List: React.FC = () => {

   const months = [
      {value: 1, label: 'Janeiro'},
      {value: 2, label: 'Fevereiro'},
      {value: 3, label: 'Março'},
      {value: 4, label: 'Abril'}
   ]

   const years = [
      {value: 2022, label: 2022},
      {value: 2021, label: 2021},
      {value: 2020, label: 2020},
      {value: 2019, label: 2019}
   ]

   return (
      <Container>
         <ContentHeader title="Saídas" lineColor="#e44c4e">
            <SelectInput options={months} />
            <SelectInput options={years} />
         </ContentHeader>

         <Filters>
            <button type="button" className="tag-filter tag-filter-recurrent">Recorrentes</button>
            <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
         </Filters>

         <Content>
            <HistoryFinanceCard
               tagColor="#e44c4e"
               title="Conta de luz"
               subtitle="17/02/2022"
               amount="R$ 257,89"
            />
         </Content>
      </Container>
   )
}

export default List