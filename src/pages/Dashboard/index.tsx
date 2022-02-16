import React from "react";
import {Container} from './style'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from "../../components/SelectInput";

const Dashboard: React.FC= () => {

   const options = [
      {value: 'Roberto', label: 'Roberto'},
      {value: 'Alana', label: 'Alana'},
      {value: 'Isa', label: 'Isa'},
      {value: 'Helena', label: 'Helena'}
   ]

   return(
      <Container>
         <ContentHeader title="Dashboard" lineColor="#f7931b">
            <SelectInput options={options}/>
         </ContentHeader>
      </Container>
   )
}

export default Dashboard