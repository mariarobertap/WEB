import styled from 'styled-components'
import backgroundGuest from '../../images/guns/login.jpg'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(${backgroundGuest});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginBox = styled.div`
  background-color: white;
  width: 32em;
  height: 29em;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
`

interface InputStyleProps{
  marginTop?: number
}

export const InputStyle = styled.input<InputStyleProps>`
  font-family: sans-serif;
  font-size: 20px;
  background-color: white;
  width: 23em;
  height: 2.5em;
  border-radius: 10px;
  border: 1px solid #7E7E7E;
  text-indent: 4%;
  margin-bottom: 2%;
  margin-top: ${(props) => props.marginTop}em;
  :hover{
    border: 1px solid #0096FF;
  }
`
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`
export const Button = styled.button`
  margin-top: 5%;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #004677;
  color: white;
  font-family: sans-serif;
  font-size: 19px;
  background-color: #206290;
  width: 12em;
  height: 3em;
  transition: 0.4s;
  :hover {
    background-color: #003B64;
  }
  font-weight: bold;
`
export const UserGrid = styled.div`
  padding-bottom: 30px;
`
export const PasswordGrid = styled.div`
  padding-bottom: 10px;
`
export const Logo = styled.img`
  height: 11em;
  width: 21em;
  justify-self: center;
`
export const IncorrectUser = styled.label`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: tomato;
  font-size: 1.1rem;
  margin-bottom: 1em;
`
