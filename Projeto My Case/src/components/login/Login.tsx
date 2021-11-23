import * as React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';

function Login() {
    
    const [email,setEmail] = useState<string>("") 
    const [senha,setSenha] = useState<string>("") 
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
            console.warn("Email e/ou senha incorreto")
        }
    }
    return (
        <>
        <div className="container">
            <div className="box">
                <form action="" className="form">
                    <div className="label">
                        <label>Email</label>
                    </div>
                    <div className="inputEmail">
                        <Input onChange={ (e) => setEmail(e.target.value)} value={email}  placeholder="email@email.com" />
                    </div>
                    <br />
                    <div className="label">
                        <label>Senha</label>
                    </div>
                    <div className="inputEmail">
                        <Input onChange={ (e) => setSenha(e.target.value)} value={senha} placeholder="senha" type="password"/>
                    </div>  
                    <br />
                    <div className="mensagem">
                        <p>Email e/ou senha incorretos</p>
                    </div>
                    <div className="labelCenter">
                        <Button onClick={verifyLogin} variant="contained">Login</Button>
                    </div>
                </form>
            </div>            
        </div>
        </>
    )
}

export default Login