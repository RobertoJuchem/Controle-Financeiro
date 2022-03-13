import React from "react";
import logoImg from '../../assets/logo.svg'
import { Container, Logo, Form, FormTitle } from './style'
import Input from "../../components/Input";

const Signin: React.FC = () => {
   return (
      <Container>
         <Logo>
            <img src={logoImg} />
            <h2>Minha Carteira</h2>
         </Logo>

         <Form onSubmit={() => { }}>
            <FormTitle>Entrar</FormTitle>

            <Input type='email' placeholder="e-mail" required/>
            <Input type='password' placeholder="senha" required/>

            <button type="submit">Acessar</button>
         </Form>
      </Container>
   )
}

export default Signin