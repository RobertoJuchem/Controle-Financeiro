import React from "react";
import { Container, Content } from "./style";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

const List: React.FC = () => {

   const options = [
      {value: 'Roberto', label: 'Roberto'},
      {value: 'Alana', label: 'Alana'},
      {value: 'Isa', label: 'Isa'},
      {value: 'Helena', label: 'Helena'}
   ]

   return (
      <Container>
         <ContentHeader title="Saídas" lineColor="#e44c4e">
            <SelectInput options={options} />
         </ContentHeader>

         <Content>
            <HistoryFinanceCard
            cardColor="#313862"
            tagColor="#e44c4e"
            title="Conta de luz"
            subtitle="17/02/2022"
            amount="R$ 257,89"
            />
            
            <HistoryFinanceCard
            cardColor="#313862"
            tagColor="#e44c4e"
            title="Conta de luz"
            subtitle="17/02/2022"
            amount="R$ 257,89"
            />

            <HistoryFinanceCard
            cardColor="#313862"
            tagColor="#e44c4e"
            title="Conta de luz"
            subtitle="17/02/2022"
            amount="R$ 257,89"
            />

            <HistoryFinanceCard
            cardColor="#313862"
            tagColor="#e44c4e"
            title="Conta de luz"
            subtitle="17/02/2022"
            amount="R$ 257,89"
            />

            <HistoryFinanceCard
            cardColor="#313862"
            tagColor="#e44c4e"
            title="Conta de luz"
            subtitle="17/02/2022"
            amount="R$ 257,89"
            />

            <HistoryFinanceCard
            cardColor="#313862"
            tagColor="#e44c4e"
            title="Conta de luz"
            subtitle="17/02/2022"
            amount="R$ 257,89"
            />

            <HistoryFinanceCard
            cardColor="#313862"
            tagColor="#e44c4e"
            title="Conta de luz"
            subtitle="17/02/2022"
            amount="R$ 257,89"
            />

            <HistoryFinanceCard
            cardColor="#313862"
            tagColor="#e44c4e"
            title="Conta de luz"
            subtitle="17/02/2022"
            amount="R$ 257,89"
            />

            <HistoryFinanceCard
            cardColor="#313862"
            tagColor="#e44c4e"
            title="Conta de luz"
            subtitle="17/02/2022"
            amount="R$ 257,89"
            />

            <HistoryFinanceCard
            cardColor="#313862"
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