import React from "react";
import { Container } from "./style";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

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
      </Container>
   )
}

export default List