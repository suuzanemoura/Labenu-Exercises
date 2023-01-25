import React from 'react'
import { Form, Input } from '../MainPage/styles'

const NameForm = ({name, age, email, confirmEmail, onChangeName, onChangeAge, onChangeEmail, onChangeConfirmEmail,sendData}) => {

  return (
    <Form>
        <label>
          Nome:
          <Input placeholder="Nome" type="text" value={name} onChange={onChangeName} required />
        </label>
        <label>
          Idade:
          <Input placeholder="Idade" type="number" value={age} onChange={onChangeAge} required />
        </label>
        <label>
          E-mail:
          <Input placeholder="usuario@usuario.com" type="email" value={email} onChange={onChangeEmail} required />
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" type="email" value={confirmEmail} onChange={onChangeConfirmEmail} required />
        </label>
      <button onClick={sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm