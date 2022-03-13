import React, {useState} from "react";
import logoImg from '../../assets/logo.svg'
import { Container, Logo, Form, FormTitle } from './style'
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/auth";

const Signin: React.FC = () => {

   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')

   const { signIn } = useAuth()

   return (
      <Container>
         <Logo>
            <img src={logoImg} />
            <h2>Minha Carteira</h2>
         </Logo>

         <Form onSubmit={() => signIn(email, password)}>
            <FormTitle>Entrar</FormTitle>

            <Input type='email' placeholder="e-mail" onChange={(e) => setEmail(e.target.value)} required/>
            <Input type='password' placeholder="senha" onChange={(e) => setPassword(e.target.value)} required/>

            <Button type="submit">Acessar</Button>
         </Form>
      </Container>
   )
}

export default Signin