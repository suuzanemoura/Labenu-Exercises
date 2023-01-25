import React from 'react'
import {MainContainer, Form, Input} from './styles'
import { useState } from 'react'

function MainPage() {

  const [inputName, setInputName] = useState("")
  const [inputAge, setInputAge] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")

  const handleInputName = (event) => {
    setInputName(event.target.value)
  }

  const handleInputAge = (event) => {
    setInputAge(event.target.value)
  }

  const handleInputEmail = (event) => {
    setInputEmail(event.target.value)
  }

  const handleInputPassword = (event) => {
    setInputPassword(event.target.value)
  }

  console.log(inputName, inputAge, inputEmail, inputPassword)

  const clearInput = (event) => {
    event.preventDefault()
    setInputName("")
    setInputAge("")
    setInputEmail("")
    setInputPassword("")
  }

  // console.log(inputName, inputAge)

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={inputName} onChange={handleInputName} type="text"/>
        </label>
        <label>
          Idade:
          <Input value={inputAge} onChange={handleInputAge} type="number" />
        </label>
        <label>
          Email:
          <Input value={inputEmail} onChange={handleInputEmail} type="email" />
        </label>
        <label>
          Senha:
          <Input value={inputPassword} onChange={handleInputPassword} type="password" />
        </label>
      <button onClick={clearInput}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
