import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, ButtonDiv, Container, Form, IncorrectUser, InputStyle, LoginBox, PasswordGrid, UserGrid } from './LoginBase';



function Login() {

    const [email,setEmail] = useState<string>("") 
    const [senha,setSenha] = useState<string>("") 
    const [incorrectUser, setIncorrectUser] = useState<boolean>(false)
    const history = useHistory()
    const verifyLogin = () => {
        console.log(email)
        console.log(senha)
        if(email === "teste@email.com" && senha === "123456"){
          history.push("/")
          console.log("login efetuado")  
        }else{
            setEmail("")
            setSenha("")
            setIncorrectUser(true)
        }
    }

    function handleKeyPress(event: any) {
        if (event.key === 'Enter') {
          verifyLogin()
        }
      }

    return (
        <>

        <Container>
        <LoginBox>
          <Form>
            <UserGrid>
              <InputStyle
                id={'UserTeste'}
                value={email}
                onChange={ (e) => setEmail(e.target.value)} 
                type='text'
                onKeyPress={(event) => handleKeyPress(event)}
                autoFocus={true}
                placeholder='Usuário'
                marginTop={4}
              />
            </UserGrid>
            <PasswordGrid>
              <InputStyle
                id={'PasswordTeste'}
                value={senha}
                onChange={ (e) => setSenha(e.target.value)} 
                type='password'
                onKeyPress={(event) => handleKeyPress(event)}
                autoFocus={incorrectUser ? true : false}
                placeholder='Senha'
              ></InputStyle>
            </PasswordGrid>
            {incorrectUser ? (
              <IncorrectUser>"Email e/ou senha incorreto"</IncorrectUser>
            ) : (
              <IncorrectUser></IncorrectUser>
            )}
            <ButtonDiv>
              <Button onClick={verifyLogin}>Entrar</Button>
            </ButtonDiv>
          </Form>
        </LoginBox>
        </Container>
        </>

    )
}

export default Login